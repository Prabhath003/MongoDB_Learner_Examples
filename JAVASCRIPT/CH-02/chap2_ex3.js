
// Import the MonogDB Node.js driver
const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = "uri";

// Connect to MongoDB
const client = new MongoClient(uri);

async function main() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        
        // Specify the database and collection
        const my_database = client.db("my_database");
        const collection = my_database.collection("my_collection");

        // Inserting documents into a collection
        await collection.insertOne({ name: "John Doe", age: 30 })

        // Querying documents from a collection
        const document = await collection.find({ name: "John Doe" })
        console.log(document)

        // Updating documents in a collection
        await collection.updateOne(
            { name: "John Doe" },
            { $set: { age: 31 } }
        )

        // Deleting documents from a collection
        await collection.deleteOne({ name: "John Doe" })

        // Creating an Index in a collection
        await collection.createIndex({ name: 1 })

        // Aggregating data using a pipeline
        output = await collection.aggregate([
            { $group: { _id: "$name", totalAge: { $sum: "$age" } } }
        ])
        console.log(output)

    } finally {
        // Close the MongoDB connection
        await client.close();
    }
}

main().catch(console.error);