
const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env file

// Get the MongoDB URI from environment variables
const uri = process.env.MONGO_URI;

// Connect to MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function deleteSingleDocument() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        // Access the database and collection
        const database = client.db('my_database');
        const collection = database.collection('my_collection');

        // Delete a single document
        const query = { name: 'John Doe' };
        const result = await collection.deleteOne(query);
        console.log('Document deleted:', result.deletedCount);
    } catch (error) {
        console.error('Error deleting document:', error);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

deleteSingleDocument();