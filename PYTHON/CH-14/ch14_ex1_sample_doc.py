
from bson import ObjectId


sample_doc = {
    "_id": ObjectId("62d6e04ecab6d8e130497480"),
    "account_id": "MDB310054629",
    "account_holder": "Puja Barbier",
    "account_type": "savings",
    "balance": {"$numberDecimal": "3977.14"},
    "transfers_completed": ["TR636449909", "TR369704039"],
}