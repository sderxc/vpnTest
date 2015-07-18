var http = require('http');

module.exports = (function(){
    var API_URL = 'http://api.openweathermap.org/data/2.5/weather?id=519690&units=metric&lang=ru';
    return {
        test: function(){
            http.get(API_URL, function(res) {
                console.log(res);
                console.log("Got response: " + res.statusCode);
            }).on('error', function(e) {
                console.log("Got error: " + e.message);
            });
        }
    };
})();