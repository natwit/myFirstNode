//58102010805

/*
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('num', 1);
var num = app.get('num');
console.log(num); //1

app.use(function(req, res, next) {
console.log('Record timestamp');
next();
});

app.use(bodyParser.json());

app.post('/calculator/rest/divide', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var object = {
        "x" : x,
        "y" : y,
        "result X Divide Y" : x/y
    }
    res.json(object);
});

app.post('/calculator/rest/power2', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var object = {
        "x" : x,
        "y" : y,
        "result x Power 2" : Math.pow(x,2) ,
        "result y Power 2" : Math.pow(y,2)
    }
    res.json(object);
});

app.post('/calculator/rest/powery', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var object = {
        "x" : x,
        "y" : y,
        "result X Power Y" : Math.pow(x,y)
    }
    res.json(object);
});

app.listen(3000,function(){
    console.log('Starting node on port 3000');
});
*/
import mongoose from './config/mongoose';
import express from './config/express';


process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3000;

var db = mongoose();
var app = express();

app.listen(process.env.PORT, () => {
    console.log('Starting node.js on port ' + process.env.PORT);
});

module.exports = app;