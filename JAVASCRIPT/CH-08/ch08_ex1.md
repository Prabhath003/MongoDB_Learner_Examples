
# start the mongoshell and use to find a documents

```javascript
use sample_analytics
```

```powershell
db.customers.find({birthdate:{$lt:ISODate("1966-08-01")}}).sort({birthdate:1})
```

```javascript
db.customers.createIndex({birthdate:1})
```

```javascript
db.customers.find({email: "james04@gmail.com"})
```

```javascript
db.customers.createIndex({email:1}, {unique:true})
```

```javascript
db.customers.explain().find({birthdate:{$gt:ISODate("1995-08-01")}})
```

```javascript
db.customers.explain().find({birthdate:{$gt:ISODate("1995-08-01")}}).sort({email:1})
```
