
const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env file

// Get the MongoDB URI from environment variables
const uri = process.env.MONGO_URI;

// Connect to MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function findAndModifyDocument() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        // Access the database and collection
        const database = client.db('my_database');
        const collection = database.collection('my_collection');

        // Update and return a single document
        const query = { name: 'John Doe' };
        const update = { $set: { age: 35 } };
        const options = { returnOriginal: false };
        const result = await collection.findOneAndUpdate(query, update, options);
        console.log('Updated document:', result.value);
    } catch (error) {
        console.error('Error updating document:', error);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

findAndModifyDocument();