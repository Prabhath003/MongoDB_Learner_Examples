
# start the mongoshell and use to find a documents

```javascript
use library
```

```javascript
db.books.replaceOne({ _id: ObjectId("62c5e671541e2c6bcb528308")},)
```

```javascript
db.books.replaceOne(
    { _id: ObjectId("62c5e671541e2c6bcb528308") },
    {
        title: "Deep Dive into React Hooks",
        ISBN: "0-3182-1299-4",
        thumbnailUrl: "http://via.placeholder.com/640x360",
        publicationDate: ISODate("2022-07-28T02:21.000Z"),
        authors: ["Ada Lovelace"],
    }
)
```

```javascript
db.books.findOne({ _id: ObjectId("62c5e671541e2c6bcb528308")},)
```
