
from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

# MongoDB connection string
uri = os.environ["MONGODB_URI"]

# Connect to MongoDB Atlas
def connect_to_atlas():
    client = MongoClient(uri)
    try:
        print("Connected to MongoDB Atlas")
    # Perform database operations here
    except Exception as e:
        print("Error connecting to MongoDB Atlas:", e)
    finally:
        client.close()
        print("Disconnected from MongoDB Atlas")

connect_to_atlas()