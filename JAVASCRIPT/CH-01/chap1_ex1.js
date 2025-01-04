
// Connect to MongoDB Atlas
const { MongoClient } = require('mongodb');

const uri = "uri";

const client = new MongoClient(uri)

async function main() {
    try {
        await client.connect();
        const database = client.db('sample');
        const collection = database.collection('users');

        // Insert a new document
        const result = await collection.insertOne({ name: 'John Doe', age: 30});

        // Find a document
        const document = await collection.findOne({ name: 'John Doe'});
        console.log(document);

        // // Update a document
        await collection.updateOne({ name: 'John Doe' }, { $set: {age: 31}});

        // // Delete a document
        await collection.deleteOne({ name: 'John Doe' });
    } finally {
        await client.close();
    }
}

main().catch(console.error)