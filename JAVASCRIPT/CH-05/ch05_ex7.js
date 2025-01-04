
const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env file

// Get the MongoDB URI from environment variables
const uri = process.env.MONGO_URI;

// Connect to MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function deleteDocuments() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        // Access the database and collection
        const database = client.db('my_database');
        const collection = database.collection('my_collection');

        // Delete documents matching a query
        const query = { age: { $gt: 30 } }; // Delete documents where age is greater than 30
        const result = await collection.deleteMany(query);
        console.log('Documents deleted:', result.deletedCount);
    } catch (error) {
        console.error('Error deleting documents:', error);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

deleteDocuments();