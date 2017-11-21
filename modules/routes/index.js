var express = require('express');
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');

// uses
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/', function(req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
}); // end router.get for index.html

router.get('/restaurant', function(req, res) {
  console.log('restaurant url hit');
  res.sendFile(path.resolve('views/restaurant.html'));
}); // end router.get for entry.html

module.exports = router;
