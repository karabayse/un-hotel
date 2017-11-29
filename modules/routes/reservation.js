var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reservationSchema = new mongoose.Schema({
  name: String,
  checkIn: Date,
  checkOut: Date,
  bed: String,
  nights: String
}); // end reservationSchema
var reservationModel = mongoose.model('reservationModel', reservationSchema);

router.get('/', function(req, res){
  console.log('reservationObject');
  reservationModel.find().then(function(reservation) {
    res.send(reservation);
    console.log('reservation:', reservation);
  });
}); // end reservation get call 

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
