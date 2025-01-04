
const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env file

// Get the MongoDB URI from environment variables
const uri = process.env.MONGO_URI;

// Connect to MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function replaceDocument() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        // Access the database and collection
        const database = client.db('my_database');
        const collection = database.collection('my_collection');

        // Query for the document to replace
        const query = { name: 'John Doe' };
        const replacementDocument = { name: 'Jane Smith', age: 35 };

        // Replace the document
        const result = await collection.replaceOne(query, replacementDocument);
        console.log('Document replaced:', result.modifiedCount);
    } catch (error) {
        console.error('Error replacing document:', error);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

replaceDocument();