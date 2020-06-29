const express = require('express');
const { json } = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({"result": "Hello World"});
})

app.get('/hello/:name', (req, res) => {
    res.json({"result": `Hello ${req.params.name}`})
})

app.listen(8080);

module.exports = app;