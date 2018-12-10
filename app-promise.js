const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geoCodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=rwgGzpbqu1wPWnSQ4BXazXoCXKXCz5v5&location=${encodedAddress}`;

axios.get(geoCodeURL).then((response) => {
    if (!response.data.results[0].locations[0]) {
        throw new Error('Unable to find that address.');
    }

    var lat = response.data.results[0].locations[0].latLng.lat;
    var lng = response.data.results[0].locations[0].latLng.lng;
    var weatherUrl = `https://api.forecast.io/forecast/45a630169f6f6139ba85026d555e6c03/${lat},${lng}`;
    console.log(response.data.results[0].locations[0].street);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers.');
    } else {
        console.log(e.message);
    }
});