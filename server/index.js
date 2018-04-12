const express = require('express');
const path = require('path');
const app = express();

const servername = "localhost";
const port = 9080;

const simple = require('./simpleController');
const game = require('./game/controller');


app
    .use('/', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        next();
    })
    .use('/', express.static(path.join(__dirname,"../dist/") ) )
    .use('/simple', simple)
    .use('/game', game)
    .use('/', (req, res, next) => {
        res.sendFile(path.join(__dirname,"../dist/index.html"));
    })
    .listen(port);


console.log("running on http://" + servername + ":" + port)