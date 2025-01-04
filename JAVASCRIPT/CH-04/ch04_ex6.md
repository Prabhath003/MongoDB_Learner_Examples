
# start the mongoshell and use to find a documents

```javascript
use training
```

```javascript
db.routes.find({
    $and: [{ "airline": "Southwest Airlines" }, { "stops": { $gte: 1 } }],
})
```

```javascript
db.routes.find({ "airline": "Southwest Airlines" }, { "stops": { $gte: 1 } })
```

```javascript
db.routes.find({ $or: [{ "dst_airport": "SEA" }, { "src_airport": "SEA" }] })
```

```javascript
db.routes.find({
    $and: [
        { $or: [
            { "dst_airport": "SEA" },
            { "src_airport": "SEA" }
        ]},
        { $or: [
            { airline: "American Airlines" },
            { airplane: 320 }
        ]},
    ]
})
```

## wrong way of logical operator as first OR is replaced by second OR statement.

```javascript
db.routes.find({
    $or: [{ "dst_airport": "SEA" }, { "src_airport": "SEA" }],
    $or: [{ airline: "American Airlines" }, { airplane: 320 }]
})
```
