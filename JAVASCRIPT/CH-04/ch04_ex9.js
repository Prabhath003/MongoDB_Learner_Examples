
// MongoDB query using comparison operators
const query = { age: { $gt: 30 } }; // Find documents where age is greater than 30
const cursor = collection.find(query);

// Iterate over the cursor to access documents
await cursor.forEach(document => {
    console.log('Found document:', document);
});