var express = require('express');
var router = express.Router();
var weather = require('../service/weather');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(weather);
  res.render('index', { title: 'Express' });
});

module.exports = router;
