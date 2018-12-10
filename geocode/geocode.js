const request = require('request');

var geocodeAddress = (address, callback) => {

    var encodedAddress = encodeURIComponent(address);

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=rwgGzpbqu1wPWnSQ4BXazXoCXKXCz5v5&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (!response) {
            callback('Unable to contact MapQuest servers.');
        }
        else if (!body.results[0].locations[0]) {
            callback('Unable to call service.');
        }
        else {
            callback(undefined, {
                address: body.results[0].locations[0].street,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            })
        }
    });
}

module.exports.geocodeAddress = geocodeAddress;
