from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from langchain_core.messages import HumanMessage, AIMessage

from agents.graph import workflow, app as graph_app
from config import settings

app = FastAPI(title="Tarun Portfolio AI Backend")

# Allow requests from the Vite frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to your netlify/vercel domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class MessageInput(BaseModel):
    role: str # "user" or "assistant"
    content: str
    
class ChatRequest(BaseModel):
    messages: List[MessageInput]
    session_id: Optional[str] = "default"
    
@app.get("/health")
def health_check():
    return {"status": "ok", "message": "Tarun's AI Portfolio Backend is running."}

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    """
    Standard synchronous chat endpoint. It accepts the full history of the chat.
    We convert the incoming history to LangChain message formats.
    """
    if not request.messages:
        raise HTTPException(status_code=400, detail="Messages array cannot be empty")
        
    langchain_messages = []
    for msg in request.messages:
        if msg.role == "user":
            langchain_messages.append(HumanMessage(content=msg.content))
        elif msg.role == "assistant":
            langchain_messages.append(AIMessage(content=msg.content))
            
    # Run the graph
    try:
        final_state = graph_app.invoke(
            {"messages": langchain_messages},
            config={"configurable": {"thread_id": request.session_id}}
        )
        
        # The last message in the state should be the AI's response
        result_messages = final_state.get("messages", [])
        if result_messages:
            last_message = result_messages[-1]
            return {"reply": last_message.content}
            
        return {"reply": "I'm sorry, I couldn't process that right now."}
        
    except Exception as e:
        import traceback
        traceback.print_exc()
        print(f"Error in chat endpoint: {e}")
        raise HTTPException(status_code=500, detail="Internal server error while processing message.")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=settings.PORT, reload=True)
