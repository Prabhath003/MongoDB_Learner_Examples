
# start the mongoshell and use to find a documents

```javascript
use training
```

```javascript
db.sales.findOne()
```

```javascript
db.sales.find({ "items.price": { $gt: 50} })
```

```javascript
db.sales.find({ "items.price": { $lt: 50} })
```

```javascript
db.sales.find({ "customer.age": { $lte: 65} })
```

```javascript
db.sales.find({ "customer.age": { $gte: 65} })
```
