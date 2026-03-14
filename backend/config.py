import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    GOOGLE_API_KEY: str = os.getenv("GOOGLE_API_KEY", "")
    PINECONE_API_KEY: str = os.getenv("PINECONE_API_KEY", "")
    PINECONE_ENV: str = os.getenv("PINECONE_ENV", "")
    PINECONE_INDEX_NAME: str = "tarun-portfolio-index"
    PORT: int = int(os.getenv("PORT", 8000))

settings = Settings()
