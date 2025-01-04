# start the mongoshell and use to find a documents

```javascript
use library
```

```javascript
db.books.find({ _id: 17})
```

```javascript
db.books.updateMany(
    { publishedDate: { $lt: ISODate("2019-01-01T08:00:00.000Z") } },
    { $set: { status: "LEGACY" } }
)
```
