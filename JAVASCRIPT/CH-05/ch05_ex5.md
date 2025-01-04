
# start the mongoshell and use to find a documents

```javascript
use library
```

```javascript
db.podcasts.find( { uploaded: ISODate("2020-04-28T08:00:00.000+00:00")} )
```

```javascript
db.podcasts.deleteOne({_id: ObjectId("6303ed190b5dff15e3ac7ae6")})
```

```javascript
db.podcasts.find({ category: "crime" })
```

```javascript
db.podcasts.deleteMany({ category: "crime" })
```
