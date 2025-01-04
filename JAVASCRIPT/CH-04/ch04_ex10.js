
// MongoDB query using array elements
const query = { hobbies: 'gaming' }; // Find documents where 'gaming' is a hobby
const cursor = collection.find(query);

// Iterate over the cursor to access documents
await cursor.forEach(document => {
    console.log('Found document:', document);
});