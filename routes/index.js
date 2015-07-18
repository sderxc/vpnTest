var express = require('express');
var router = express.Router();
var weather = require('../service/weather');

/* GET home page. */
router.get('/', function(req, res, next) {
  weather.test();
  res.render('index', { title: 'Express' });
});

module.exports = router;
