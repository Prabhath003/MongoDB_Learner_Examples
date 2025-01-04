
async function findAndDeleteDocument() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        
        // Access the database and collection
        const database = client.db('my_database');
        const collection = database.collection('my_collection');
        
        // Find and delete a single document
        const query = { name: 'Alice' };
        const result = await collection.findOneAndDelete(query);
        console.log('Deleted document:', result.value);
    } catch (error) {
        console.error('Error finding and deleting document:', error);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

findAndDeleteDocument();