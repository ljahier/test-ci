const express = require('express');
const { json } = require('express');
const app = express();

let users = [
    {
        "id": 0,
        "username": "john",
        "name": "John Doe",
        "email": "john@doe.com"
    },
    {
        "id": 1,
        "username": "jean",
        "name": "Jean Dupond",
        "email": "jean@dupond.com"
    },
    {
        "id": 2,
        "username": "mike",
        "name": "Mike Parker",
        "email": "mike@parker.com"
    }
]

app.get('/', (req, res) => {
    res.json({"result": "Hello World"});
})

app.get('/hello/:name', (req, res) => {
    res.json({"result": `Hello ${req.params.name}`})
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(8080);

module.exports = app;