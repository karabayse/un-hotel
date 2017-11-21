// requires
var express = require('express');
var app = express();
var index = require('./modules/routes/index');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// uses
app.use(express.static('public'));
app.use('/', index);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// globals
var port = process.env.PORT || 3333;

// spin up server
app.listen(port, function() {
  console.log('server up on:', port);
});
