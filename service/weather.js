var http = require('http');

module.exports = (function(){
    var API_URL = 'http://api.openweathermap.org/data/2.5/weather?id=519690&units=metric&lang=ru';
    var apiResponce;

    http.get(API_URL, function(res) {
        var _self = this;
        console.log(_self);
        var content = '';
        res.on('data', function(chunk) {
            content += chunk;
        });
        res.on('end', function() {
            _self.apiResponce =  JSON.parse(content);

        });
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });

    return {
        getTemp: function() {
            return {
                curr: apiResponce.main.temp,
                min: apiResponce.main.temp_min,
                max: apiResponce.main.temp_max
            }
        }
    };
})();