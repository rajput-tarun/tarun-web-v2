import os
from dotenv import load_dotenv
from langchain_community.document_loaders import PyPDFLoader, TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_pinecone import PineconeVectorStore
from pinecone import Pinecone

# Load environment variables
load_dotenv()

def index_documents():
    print("Loading documents from my_doc/ directory...")
    
    docs = []
    doc_dir = "../my_doc"
    
    # Check if directory exists
    if not os.path.exists(doc_dir):
        print(f"Directory {doc_dir} not found. Please create it and add your documents.")
        return

    # Load all supported files
    for filename in os.listdir(doc_dir):
        file_path = os.path.join(doc_dir, filename)
        if filename.endswith(".pdf"):
            print(f"Loading PDF: {filename}")
            loader = PyPDFLoader(file_path)
            docs.extend(loader.load())
        elif filename.endswith(".txt"):
            print(f"Loading Text file: {filename}")
            loader = TextLoader(file_path)
            docs.extend(loader.load())
            
    if not docs:
        print("No readable documents found in my_doc/.")
        return
        
    print(f"Loaded {len(docs)} document pages/sections.")

    # Split documents into chunks
    print("Splitting documents into chunks...")
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        add_start_index=True
    )
    splits = text_splitter.split_documents(docs)
    print(f"Created {len(splits)} chunks.")
    
    # Initialize embeddings and Pinecone
    print("Initializing Pinecone Embeddings (llama-text-embed-v2)...")
    from langchain_pinecone import PineconeEmbeddings

    pinecone_api_key = os.getenv("PINECONE_API_KEY")
    index_name = "tarun-portfolio-index"
    
    # Use Pinecone's inference API for the llama model
    embeddings = PineconeEmbeddings(
        model="llama-text-embed-v2",
        pinecone_api_key=pinecone_api_key
    )
    
    if not pinecone_api_key:
        print("Error: PINECONE_API_KEY not found in environment variables.")
        return
        
    print("Connecting to Pinecone...")
    pc = Pinecone(api_key=pinecone_api_key)
    
    # Verify index exists
    if index_name not in pc.list_indexes().names():
        print(f"Error: Pinecone index '{index_name}' does not exist.")
        print("Please create it in the Pinecone console. (Recommended: Dimensions 768 for embedding-001, metric cosine)")
        return
        
    # Upsert to Pinecone
    print(f"Upserting vectors to Pinecone index '{index_name}'...")
    try:
        PineconeVectorStore.from_documents(
            documents=splits,
            embedding=embeddings,
            index_name=index_name,
            pinecone_api_key=pinecone_api_key
        )
        print("\nSuccessfully indexed documents to Pinecone!")
    except Exception as e:
        print(f"\nError during indexing: {e}")

if __name__ == "__main__":
    index_documents()
