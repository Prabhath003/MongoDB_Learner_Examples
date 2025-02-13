
import datetime
import os

from dotenv import load_dotenv
from pymongo import MongoClient

# Load config from .env file
load_dotenv()
MONGODB_URI = os.environ["MONGODB_URI"]

# Connect to MongoDB cluster with MongoClient
client = MongoClient(MONGODB_URI)

# Get reference to 'bank' database
db = client.bank

# Get reference to 'accounts' collection
accounts_collection = db.accounts

new_account = {
    "account_holder": "Linus Torvalds",
    "account_id": "MDBB29001337",
    "account_type": "checking",
    "balance": 50352434,
    "last_updated": datetime.datetime.now(datetime.UTC)
}

# Write an expression that inserts the 'new_account' document into the 'accounts' collection
result = accounts_collection.insert_one(new_account)

document_id = result.inserted_id
print(f"_id of inserted document: {document_id}")

client.close()