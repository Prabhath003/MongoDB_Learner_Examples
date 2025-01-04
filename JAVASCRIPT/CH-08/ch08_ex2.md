
# start the mongoshell and use to find a documents

```javascript
use sample_analytics
```

```javascript
db.customers.find({birthdate: {$gte: ISODate("1977-01-01")}, active:true}).sort({birthdate:-1, name:1})
```

```javascript
db.customers.explain().find({birthdate: {$gte: ISODate("1977-01-01")}, active:true}).sort({birthdate:-1, name:1})
```

```javascript
db.customers.createIndex({active:1, birthdate:-1, name:1})
```

```javascript
db.customers.explain().find({birthdate: {$gte: ISODate("1977-01-01")}, active:true}).sort({birthdate:-1, name:1})
```

```javascript
db.customers.find({birthdate: {$gte: ISODate("1977-01-01")}, active:true}, {name:1, birthdate:1, _id:0}).sort({birthdate:-1, name:1})
```

```javascript
db.customers.explain().find({birthdate: {$gte: ISODate("1977-01-01")}, active:true}, {name:1, birthdate:1, _id:0}).sort({birthdate:-1, name:1})
```
