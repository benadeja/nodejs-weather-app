const request = require('request');

var getWeather = (latitude, longitude, callback) => {

    request({
        url: `https://api.darksky.net/forecast/45a630169f6f6139ba85026d555e6c03/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        }
        else {
            callback('Unable to fetch weather.');
        }
    });

}

module.exports.getWeather = getWeather;
