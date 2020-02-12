const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/9402e031ac601cb08f2b33fcb50ae8df/${latitude},${longitude}`
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather services", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else {
            const currentlyData = body.currently
            const dailyData = body.daily.data[0].summary;   
            callback(undefined, `${dailyData} It is currently ${currentlyData.temperature} degrees out. The high today is ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow}. There is a ${currentlyData.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast;