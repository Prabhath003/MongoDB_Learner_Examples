
import os

from dotenv import load_dotenv
from pymongo import MongoClient

# load config from .env file
load_dotenv()
MONGODB_URI = os.environ["MONGODB_URI"]

# Connect to MongoDB cluster with MongoClient
client = MongoClient(MONGODB_URI)

# Get a reference to 'bank' database
db = client.bank

# Get a reference to 'accounts' collection
accounts_collection = db.accounts

new_accounts = [
    {
        "account_holder": "Mark Zuckerberg",
        "account_id": "MDBB29001338",
        "account_type": "checking",
        "balance": 5000000
    },
    {
        "account_holder": "Elon Musk",
        "account_id": "MDBB29001339",
        "account_type": "savings",
        "balance": 100000000
    }
]

# Write an expression that inserts the documents in 'new_accounts' into the 'accounts' collection.
result = accounts_collection.insert_many(new_accounts)

document_ids = result.inserted_ids
print("# of documents inserted: " + str(len(document_ids)))
print(f"_ids of inserted documents: {document_ids}")

client.close()