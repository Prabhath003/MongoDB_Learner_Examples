
import { MongoClient } from 'mongodb';
require('dotenv').config(); // Load environment variables from .env file

// Get the MongoDB URI from environment variables
const uri = process.env.MONGO_URI;

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        // Additional database operations here
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

connectToMongoDB();
