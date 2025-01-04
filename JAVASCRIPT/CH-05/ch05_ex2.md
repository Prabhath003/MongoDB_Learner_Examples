# start the mongoshell and use to find a documents

```javascript
use library
```

```javascript
db.podcasts.findOne({ title: "The MongoDB Podcast"})
```

```javascript
db.podcasts.updateOne(
    { _id: ObjectId("6261a92dfee1ff300dc80f1") },
    { $set: { subscribers: 98562 } }
)
```

```javascript
db.podcasts.updateOne(
    { title: "The Developer Hub" },
    { $set: { topics: ["databases", "MongoDB"] } }
)
```

```javascript
db.podcasts.updateOne(
    { title: "The Developer Hub" },
    { $set: { topics: ["databases", "MongoDB"] } },
    { upsert: true} 
)
```

```javascript
db.podcasts.findOne({ title: "The MongoDB Podcast"})
```

```javascript
db.podcasts.updateOne(
    { _id: ObjectId("6261a92dfee1ff300dc80f1") },
    { $push: { hosts: "Nic Raboy" } }
)
```
