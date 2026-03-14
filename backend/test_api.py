import requests

if __name__ == "__main__":
    url = "http://localhost:8000/chat"
    payload = {
        "messages": [
            {
                "role": "user",
                "content": "Hi I am a recruiter. Can you analyze this JD: We need someone expert in python, machine learning and MLOps to deploy models. And tell me if Tarun is a match."
            }
        ],
        "session_id": "test-session-1"
    }
    
    response = requests.post(url, json=payload)
    print("Status:", response.status_code)
    try:
        print("Response:", response.json())
    except:
        print("Raw:", response.text)
