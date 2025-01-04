# start the mongoshell and use to find a documents

```javascript
use library
```

```javascript
db.podcasts.findOne({ title: "The Atlas Podcase"})
```

```javascript
db.podcasts.findAndModify({
    query: { _id: ObjectId("62c7361f4bf2017af21ccdde") },
    update: { $inc: {downloads: 1} },
    new: true
})
```
