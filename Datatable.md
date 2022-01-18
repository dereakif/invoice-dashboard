# Introduction

Hello 👋

👏 Congratulations you've taken the first hurdle! 
This code challenge means you've made a good impression and got us curious about your code style.

In this challenge we want you to demonstrate client side skills. We challenge you to create a simple datatable with filter functionality using ant.design UI Framework.


As a tip we provide an example row and schema but feel free to design the schema the way you like:

```js
rows = [{
    id: 1,
    service: 'DMP',
    invoice_id: 561,
    date: new Date(),
    amount: 196.15,
    status: 'paid'
}]
```

```js
schema = {
  "service": {
    "name" : "Service",
    "type": "multiselect",
    "ops": ["eq", "neq"],
    "values": ["DMP", "Exchange", "SSP", "Verification", "DSP"]
  },
  "date": {
    "name" : "Date",
    "type": "datetime",
    "ops", ["eq","ne","gt","lt","ge","le"]
  }, 
  "amount": {
    "name" : "Amount",
    "type": "money",
    "ops", ["eq","ne","gt","lt","ge","le"]
  },
  "status": {
    "name" : "Status",
    "type": "multiselect",
    "ops": ["eq", "neq"],
    "values": ["Odendi", "Bekliyor", "Odenmedi"]
  }
}
```

When you're done, please archive the directory and send it back to us. Please also remove all personal traces from the code.

Using git (keeping .git directory in this case) is highly appreciated. This way we could also evaluate the way you make your commits. 
If you decide to do so, please make the git user anonym. To do so you simply need to configure it in repository setup:

```sh
git config user.name 'Anonymous'
git config user.email '<>'
```

🍀 Good luck
