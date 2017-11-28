var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reservationSchema = new mongoose.Schema({
  checkIn: Date,
  checkOut: Date,
  bed: String,
  nights: String
}); // end reservationSchema
var reservationModel = mongoose.model('reservationModel', reservationSchema);


router.post('/', function(req, res) {
  console.log('reservation url hit', req.body);
  var newReservation = req.body;
  console.log('req.body:', req.body);
  reservationModel( newReservation ).save().then(function() {
    res.sendStatus(201);
  }).catch(function(err) {
    console.log('error', err);
  });
}); // end router.post for reservation



module.exports = router;
