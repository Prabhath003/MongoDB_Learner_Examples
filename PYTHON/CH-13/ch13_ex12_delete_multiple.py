
import os
import pprint

from dotenv import load_dotenv
from pymongo import MongoClient

# Load config from .env file
load_dotenv()
MONGODB_URI = os.environ.get('MONGODB_URI')

# Connect to MongoDB cluster with MongoClient
client = MongoClient(MONGODB_URI)

# Get a reference to 'bank' database
db = client.bank

# Get a reference to 'accounts' collection
accounts_collection = db.accounts

# Filter for accounts with balance less than 6000000
documents_to_delete = {"balance": {"$lt": 6000000}}

# Search for sample document before delete
print("Searching for sample target document before delete:")
pprint.pprint(accounts_collection.find_one(documents_to_delete))

# Write an expression that deletes the target documents
result = accounts_collection.delete_many(documents_to_delete)

# Search for sample document after delete
print("Searching for sample target document after delete:")
pprint.pprint(accounts_collection.find_one(documents_to_delete))

print("Documents deleted: " + str(result.deleted_count))

client.close()