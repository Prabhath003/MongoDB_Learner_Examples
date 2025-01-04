
const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env file

// Get the MongoDB URI from environment variables
const uri = process.env.MONGO_URI;

// Connect to MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function updateDocument() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        // Access the database and collection
        const database = client.db('my_database');
        const collection = database.collection('my_collection');

        // Update a single document
        const filter = { name: 'John Doe' };
        const update = { $set: { age: 35 } };
        const result = await collection.updateOne(filter, update);
        console.log('Document updated:', result.modifiedCount);
    } catch (error) {
        console.error('Error updating document:', error);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

updateDocument();