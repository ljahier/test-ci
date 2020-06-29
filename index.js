const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({"result": "Hello World"});
})

app.listen(8080);