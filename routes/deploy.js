var express = require('express');
var router = express.Router();
require('shelljs/global');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var res = exec('git pull').code;
    if ( res !== 0) {
            echo('Error: Git commit failed');
    }

    res.send('pull exec with status ' + res);
});

module.exports = router;
