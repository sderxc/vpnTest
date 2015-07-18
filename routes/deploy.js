var express = require('express');
var router = express.Router();
require('shelljs/global');

router.get('/', function(req, res, next) {
    var r = exec('git pull').code;
    if ( r !== 0) {
            echo('Error: Git commit failed');
    }

    res.send('pull exec with status ' + r);
});

module.exports = router;
