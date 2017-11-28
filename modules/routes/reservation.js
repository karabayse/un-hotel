var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reservationSchema = new mongoose.Schema({
  checkIn: Date,
  checkOut: Date,
});




module.exports = router;
