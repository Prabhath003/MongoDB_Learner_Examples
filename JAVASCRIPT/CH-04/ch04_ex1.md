
# start the mongoshell and use to insert a document

```javascript
db.grades.insertOne( {
    student_id: 546799,
    scores: [
        {
            type: "quiz",
            score: 50,
        },
        {
            type: "homework",
            score: 70,
        }
    ]
} )
```
