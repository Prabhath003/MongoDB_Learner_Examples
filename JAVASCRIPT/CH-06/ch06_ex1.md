# start the mongoshell and use to find a documents

```javascript
use training
```

```javascript
db.companies.findOne()
```

```javascript
db.companies.find({category_code:"music"}).sort({name:1})
```

```javascript
db.companies.find({category_code:"music"}, {name:1}).sort({name:1})
```

```javascript
db.companies.find({category_code:"music"}).sort({number_of_employees:-1}).limit(3)
```

```javascript
db.companies.find({category_code:"music"}, {name:1, number_of_employees:1}).sort({number_of_employees:-1}).limit(3)
```