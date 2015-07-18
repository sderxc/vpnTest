var http = require('http');

module.exports = (function(){
    var API_URL = 'http://api.openweathermap.org/data/2.5/weather?id=519690&units=metric&lang=ru';
    return {
        test: function(){
            http.get(API_URL, function(res) {
                console.log("Got response: " + res.statusCode);
                var content = '';
                res.on('data', function(chunk) {
                    content += chunk;
                });
                res.on('end', function() {
                    content =  JSON.parse(content);
                    console.log(content.weather.description);
                });
            }).on('error', function(e) {
                console.log("Got error: " + e.message);
            });
        }
    };
})();