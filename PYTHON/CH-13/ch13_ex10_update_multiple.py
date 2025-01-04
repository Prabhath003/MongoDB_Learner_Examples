
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

# Filter
select_accounts = {"account_type": "savings"}

# Update
set_field = {"$set": {"minimum_balance": 100}}

# Write an expression that adds a 'minimum_balance' field to each savings account and sets its value to 100.
result = accounts_collection.update_many(select_accounts, set_field)

print("Documents matched: " + str(result.matched_count))
print("Documents updated: " + str(result.modified_count))
pprint.pprint(accounts_collection.find_one(select_accounts))

client.close()