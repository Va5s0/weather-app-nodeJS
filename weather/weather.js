const request = require ('request');
const {secrets} = require('../secrets');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${secrets.token}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
}

module.exports.getWeather = getWeather;
