
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

        // Inserting a document with nested structure
        const result = await collection.insertOne({
            name: 'John Doe',
            age: 30,
            address: {
                street: '123 Main St',
                city: 'Anytown',
                country: 'USA'
            },
            hobbies: ['reading', 'traveling', 'photography']
        });

        // Retrieving a document with nested structure
        const document = await collection.findOne({ name: 'John Doe' });
        console.log(document);
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
}

main().catch(console.error);