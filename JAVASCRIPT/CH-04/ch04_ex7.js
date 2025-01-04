
const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env file

// Get the MongoDB URI from environment variables
const uri = process.env.MONGO_URI;

// Connect to MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function insertDocuments() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        // Access the database and collection
        const database = client.db('my_database');
        const collection = database.collection('my_collection');

        // Insert a single document
        const result = await collection.insertOne({ name: 'John Doe', age: 30 });
        console.log('Inserted document:', result.insertedId);

        // Insert multiple documents
        const documents = [
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 35 }
        ];
        const resultMany = await collection.insertMany(documents);
        console.log('Inserted documents:', resultMany.insertedIds);
    } catch (error) {
        console.error('Error inserting documents:', error);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

insertDocuments();