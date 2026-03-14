from typing import Annotated, TypedDict, List
import operator
from langchain_core.messages import BaseMessage, HumanMessage, AIMessage
from langchain_google_genai import ChatGoogleGenerativeAI
from langgraph.graph import StateGraph, START, END
from langgraph.prebuilt import ToolNode

from agents.tools import tools_list
from agents.prompts import ROUTER_PROMPT, RECRUITER_PROMPT, STUDENT_PROMPT, VISITOR_PROMPT

class ChatState(TypedDict):
    messages: Annotated[List[BaseMessage], operator.add]
    visitor_role: str

llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", convert_system_message_to_human=True)
llm_with_tools = llm.bind_tools(tools_list)

def router_node(state: ChatState):
    """Determines the persona of the user based on the first message."""
    messages = state.get("messages", [])
    if not messages:
        return {"visitor_role": "visitor"}
        
    last_user_message = next((m.content for m in reversed(messages) if isinstance(m, HumanMessage)), "")
    
    # Simple routing with LLM
    prompt = ROUTER_PROMPT + f"\n\nUser Input: {last_user_message}"
    response = llm.invoke([HumanMessage(content=prompt)])
    
    role = response.content.strip().lower()
    
    # Fallback to visitor if it generated something weird
    if role not in ["recruiter", "student", "visitor"]:
        role = "visitor"
        
    return {"visitor_role": role, "messages": []} # we don't return a message directly here, just set state

def get_agent_response(state: ChatState, system_prompt: str):
    messages = state["messages"]
    sys_msg = {"role": "system", "content": system_prompt}
    
    # Langchain message formatting handling - prepend system prompt logically
    # Since we can't easily prepend SystemMessage to existing conversation history in memory cleanly every time
    # without duplication, we pass it dynamically to LLM.
    
    formatted_messages = []
    # Gemini might need specific conversion handling depending on the version
    try:
        from langchain_core.messages import SystemMessage
        formatted_messages.append(SystemMessage(content=system_prompt))
    except:
        pass
        
    formatted_messages.extend(messages)
    
    response = llm_with_tools.invoke(formatted_messages)
    return {"messages": [response]}

def recruiter_node(state: ChatState):
    return get_agent_response(state, RECRUITER_PROMPT)

def student_node(state: ChatState):
    return get_agent_response(state, STUDENT_PROMPT)

def visitor_node(state: ChatState):
    return get_agent_response(state, VISITOR_PROMPT)

def route_to_agent(state: ChatState):
    role = state.get("visitor_role", "visitor")
    if role == "recruiter":
        return "recruiter"
    elif role == "student":
        return "student"
    return "visitor"

def route_after_agent(state: ChatState):
    messages = state["messages"]
    last_message = messages[-1]
    
    # If the LLM makes a tool call, route to the generic ToolNode
    if hasattr(last_message, "tool_calls") and last_message.tool_calls:
        return "tools"
        
    # Otherwise, return END
    return END

# Build the graph
workflow = StateGraph(ChatState)

# Nodes
workflow.add_node("router", router_node)
workflow.add_node("recruiter", recruiter_node)
workflow.add_node("student", student_node)
workflow.add_node("visitor", visitor_node)
workflow.add_node("tools", ToolNode(tools_list))

# Edges
workflow.add_conditional_edges("router", route_to_agent, {"recruiter": "recruiter", "student": "student", "visitor": "visitor"})

# Add conditional edges from agents to tools or END
for agent in ["recruiter", "student", "visitor"]:
    workflow.add_conditional_edges(agent, route_after_agent, {"tools": "tools", END: END})

# Once tools are done, route back to the appropriate agent to formulate the final answer
workflow.add_conditional_edges("tools", route_to_agent, {"recruiter": "recruiter", "student": "student", "visitor": "visitor"})

workflow.add_edge(START, "router")

# Compile
app = workflow.compile()
