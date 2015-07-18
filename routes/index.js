var express = require('express');
var router = express.Router();
var weather = require('../service/weather');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', weather: weather });
});

module.exports = router;
