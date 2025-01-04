
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
# db = client.bank
db = client.sample_mflix

# Get a reference to 'accounts' collection
# account_collection = db.accounts
movie_collection = db.movies

# Calculate the average balance of checking and savings accounts with balances of less than $1000

# Select accounts with balances of less than $1000.
# select_by_balance = {"$match": {"balance": {"$lt": 1000}}}
select_by_runtime = {"$match": {"runtime": {"$lt": 150}}}

# Separate documents by account type and calculate the average balance for each account type.
# separate_by_account_calculate_avg_balance = {
#     "$group": {"_id": "$account_type", "avg_balance": {"$avg": "$balance"}}
# }
separate_by_year_calculate_avg_runtime = {
    "$group": {"_id": "$year", "avg_runtime": {"$avg": "$runtime"}}
}

# Create an aggregation pipeline using "stage_match_balance" and "stage_group_account_type".
# pipeline = [
#     select_by_balance,
#     separate_by_account_calculate_avg_balance
# ]
pipeline = [
    select_by_runtime,
    separate_by_year_calculate_avg_runtime
]

# Perform an aggregation on 'pipeline'.
# results = accounts_collection.aggregate(pipeline)
results = movie_collection.aggregate(pipeline)

print()
# print(
#     "Average balance of checking and savings accounts with balance of less than $1000:", "\n"
# )
print(
    "Average runtime movies per year with runtime of less than $1000:", "\n"
)

for item in results:
    pprint.pprint(item)
    
client.close()