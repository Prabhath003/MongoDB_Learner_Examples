
# start the mongoshell and use to insert many documents

```javascript
use training
```

```javascript
db.grades.insertMany([
    {
        student_id: 546789,
        scores: [
            {
                type: "quiz",
                score: 50,
            },
            {
                type: "homework",
                score: 70,
            }
        ],
        class_id: 551,
    },
    {
        student_id: 777777,
        scores: [
            {
                type: "quiz",
                score: 72,
            }
        ],
        class_id: 550,
    },
    {
        student_id: 223344,
        scores: [
            {
                type: "exam",
                score: 45,
            }
        ],
        class_id: 551,
    },
])
```
