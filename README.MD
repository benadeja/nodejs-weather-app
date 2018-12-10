# Nodejs Weather Console App

Console application to retrieve the weather based on an address you provide as input built using Nodejs. 

We will be making 2 REST calls in this application:
- Rest call to a location api (http://www.mapquestapi.com) to return the coordinates based of an address provided as input.
- Rest call to a weather api (https://api.forecast.io) to return the weather based on coordinates provided as input.

This application provide 2 entrypoints:
- app.js (The application has been implemented using callbacks)
- app-promise.js (The application has been implemented using promises)

We will also be showcasing how to chain callbacks and promises to drive application logic.

## Getting Started

Make sure you have Nodejs and npm installed on your machine.

Follow this link if unsure : https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Installing

Run the following command from the weather-app directory to see how the system works:

node app.js --help
node app-promise.js --help

## Authors

* **Jaco Benade** - *Initial work* - (https://github.com/benadeja)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
