
// MongoDB query using logical operators
const query = {
    $or: [
        { age: { $gt: 30 } }, // Find documents where age is greater than 30
        { hobbies: 'reading' } // or documents where 'reading' is a hobby
    ]
};
const cursor = collection.find(query);

// Iterate over the cursor to access documents
await cursor.forEach(document => {
    console.log('Found document:', document);
});