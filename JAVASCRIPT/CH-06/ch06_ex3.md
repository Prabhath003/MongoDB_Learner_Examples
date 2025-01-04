
# start the mongoshell and use to find a documents

```javascript
use training
```

```javascript
db.trips.countDocuments()
```

```javascript
db.trips.countDocuments({tripduration: {$gt: 120}, usertype:"Subscriber" })
```