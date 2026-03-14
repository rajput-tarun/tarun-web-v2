import traceback
from agents.graph import app as graph_app
from langchain_core.messages import HumanMessage

def test():
    try:
        messages = [HumanMessage(content='Are you the recruiter agent?')]
        result = graph_app.invoke(
            {"messages": messages},
            config={"configurable": {"thread_id": "test"}}
        )
        print("Success:", result)
    except Exception as e:
        print("FAILED!")
        traceback.print_exc()

if __name__ == "__main__":
    test()
