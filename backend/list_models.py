import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

# Try to list models
try:
    print("API KEY:", os.environ.get("GOOGLE_API_KEY")[:5] + "...")
    client = genai.Client()
    for m in client.models.list():
        print(m.name)
except Exception as e:
    import traceback
    traceback.print_exc()
    print("Error listing models:", e)
