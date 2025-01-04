
# start the mongoshell and use to find a documents

```javascript
use training
```

```javascript
db.accounts.find({ "products": "InvestmentStock" })
```

```javascript
db.accounts.find({
    products: {
        $elemMatch: { $eq: "InvestmentStock" }
    }
})
```

```javascript
db.sales.findOne( )
```

```js
db.accounts.find({
    items: {
        $elemMatch: { name: "laptop", price: { $gt: 800 }, quantity: { $gte: 1 } },
    },
})
```
