
const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env file

// Get the MongoDB URI from environment variables
const uri = process.env.MONGO_URI;

// Connect to MongoDB Atlas
async function connectToAtlas() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        // Perform database operations here
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB Atlas');
    }
}

connectToAtlas();