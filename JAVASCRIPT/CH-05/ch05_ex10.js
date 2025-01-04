
const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env file

// Get the MongoDB URI from environment variables
const uri = process.env.MONGO_URI;

// Connect to MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function updateManyDocuments() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        // Access the database and collection
        const database = client.db('my_database');
        const collection = database.collection('my_collection');

        // Update multiple documents
        const filter = { age: { $lt: 30 } };
        const update = { $set: { status: 'inactive' } };
        const result = await collection.updateMany(filter, update);
        console.log('Documents updated:', result.modifiedCount);
    } catch (error) {
        console.error('Error updating documents:', error);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

updateManyDocuments();