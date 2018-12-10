const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);

        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=rwgGzpbqu1wPWnSQ4BXazXoCXKXCz5v5&location=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (!response) {
                reject('Unable to contact MapQuest servers.');
            }
            else if (!body.results[0].locations[0]) {
                reject('Unable to call service.');
            }
            else {
                resolve({
                    address: body.results[0].locations[0].street,
                    latitude: body.results[0].locations[0].latLng.lat,
                    longitude: body.results[0].locations[0].latLng.lng
                });
            }
        });
    });
};

geocodeAddress('268 West Avenue Centurion').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});