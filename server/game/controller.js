var express = require('express')
var app = express.Router();

var game = require('./model');

var game = new Game();

module.exports = app
    .get('/quotes',  (req, res) => res.send(game.GetQuotes()))
