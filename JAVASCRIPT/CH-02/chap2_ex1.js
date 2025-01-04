
// Import the MonogDB Node.js driver
const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = "uri";

// Connect to MongoDB
const client = new MongoClient(uri);

async function main() {
    try {
        // Connect to MongoDB server
        await client.connect();
        
        // Access the "sample" database
        const database = client.db('sample');

        // Access the "users" collection
        const collection = database.collection('users');

        // Insert a new document
        const result = await collection.insertOne({ name: 'Prabhath Chellingi', age: 21 });

        // Retrieve a document
        const document = await collection.findOne({ name: 'Prabhath Chellingi' });
        console.log(document);
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
}

main().catch(console.error);