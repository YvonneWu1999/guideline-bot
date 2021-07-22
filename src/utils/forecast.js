require('dotenv').config()
const request = require('request')



//Forecasting weather
const forecast = (lat, lng, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=' + process.env.WEATHER_ACCESS_TOKEN + '&query=' + lat + ',' + lng
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable not find location', undefined)
        } else {
            callback(undefined, { weather: body.current.weather_descriptions[0], temperature: body.current.temperature + '°C', feelslike: body.current.feelslike + '°C', humidity: body.current.humidity + '%' })
        }
    })
}

module.exports = forecast