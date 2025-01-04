# start the mongoshell and use to find a documents

```javascript
use training
```

```javascript
 db.inspections.findOne()
```

```javascript
db.inspections.find({sector: "Restaurant - 818"})
```

```javascript
db.inspections.find({sector: "Restaurant - 818"}, {business_name:1, result:1})
```

```javascript
db.inspections.find({sector: "Restaurant - 818"}, {business_name:1, result:1, _id:0})
```

```javascript
db.inspections.find({result: {$in:["Pass", "Warning"]}}, {date:0, "address.zip":0})
```
