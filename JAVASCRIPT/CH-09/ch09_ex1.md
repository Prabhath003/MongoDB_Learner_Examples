
# start the mongoshell and use to find a documents

```javascript
use bank
```

```javascript
db.accounts.find( { account_id: "MDB740836066" } )
```

```javascript
const session = db.getMongo().startSession();

session.startTransaction()

const account = session.getDatabase("bank").getCollection('accounts')

account.updateOne( { account_id: "MDB740836066"}, {$inc: { balance: -30 } })

account.updateOne( { account_id: "MDB963134500"}, {$inc: { balance: 30 }})

session.commitTransaction()
```

```javascript
db.accounts.find( { account_id: "MDB740836066" } )

db.accounts.find( { account_id: "MDB963134500" } )
```

```javascript
session.startTransaction()

account.updateOne( { account_id: "MDB963134500"}, {$inc: { balance: 5 }})

session.abortTransaction()
```

```javascript
db.accounts.find( { account_id: "MDB963134500" } )
```
