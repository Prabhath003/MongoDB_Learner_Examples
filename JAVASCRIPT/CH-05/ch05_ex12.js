
async function deleteMultipleDocuments() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        // Access the database and collection
        const database = client.db('my_database');
        const collection = database.collection('my_collection');

        // Delete multiple documents
        const query = { age: { $gt: 50 } }; // Delete documents where age is greater than 50
        const result = await collection.deleteMany(query);
        console.log('Documents deleted:', result.deletedCount);
    } catch (error) {
        console.error('Error deleting documents:', error);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

deleteMultipleDocuments();