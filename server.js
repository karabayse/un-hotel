// requires
var express = require('express');
var app = express();
var mongoose = require('mongoose');

// uses
app.use(express.static('public'));

// globals
var port = process.env.PORT || 3333;

// spin up server
app.listen(port, function() {
  console.log('server up on:', port);
});
