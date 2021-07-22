require('dotenv').config()
const line = require('@line/bot-sdk')
const express = require('express')
const router = express.Router()
const forecast = require('../utils/forecast')
const randommusic = require('../utils/music')
const { restaurant, restaurantdetail, restaurantphoto, randomrestaurant } = require('../utils/restaurant')
const setWeatherJson = require('../utils/weatherjson')
const setRestaurantJson = require('../utils/restaurantjson')
const youtubesearchapi = require('youtube-search-api')
//linebot config
const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET
}

line.middleware(config)

router.post('/bot', line.middleware(config), (req, res) => {
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result)).catch(err => {
            console.log(err)
        })
})
//function for checking object value
function checkProperties(obj) {
    for (var key in obj) {
        if (!obj[key]) {
            console.log("this is undefined", obj[key])
            obj[key] = 'not provided'
        }

    }
}


// create client 
const client = new line.Client(config)
function handleEvent(event) {
    if (event.type !== 'message') {
        return Promise.resolve(null);
    }
    // if (event.type !== 'message' || event.message.type !== 'text') {
    //     return Promise.resolve(null);
    // }
    if (event.message.type == 'text') {
        const echo = { type: 'text', text: event.message.text }
        switch (event.message.text) {
            // reply to user
            case '想聽音樂':
                youtubesearchapi.GetListByKeyword(randommusic(), false).then(res => {
                    //Will return a number inside the given range, inclusive of both minimum and maximum
                    let index = Math.floor(Math.random() * (res.items.length - 0 + 1)) + 0
                    let youtubeurl = 'https://www.youtube.com/watch?v=' + res.items[index].id
                    return client.replyMessage(event.replyToken, { type: 'text', text: youtubeurl })
                }).catch(err => {
                    return err
                })
                break
            case '政大天氣':
                forecast(24.988033, 121.577408, (error, forecastData) => {
                    if (error) {
                        return error
                    }
                    let data = setWeatherJson('NCCU ', forecastData.weather, forecastData.temperature, forecastData.feelslike, forecastData.humidity)
                    return client.replyMessage(event.replyToken, data)
                })
                break
            case '要吃什麼':
                restaurant((error, placesinfo) => {
                    let callbackscount = 0
                    if (error) {
                        return error
                    }
                    let randomrestaurants = randomrestaurant(placesinfo)
                    let infos = []
                    for (let i = 0; i < randomrestaurants.length; i++) {
                        // let defaultphotourl ='https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
                        let photourl = restaurantphoto(randomrestaurants[i].photoreference)
                        restaurantdetail(randomrestaurants[i].placeId, (err, detaildata) => {
                            if (err) {
                                return client.replyMessage(event.replyToken, { type: 'text', text: 'error' })
                            }
                            callbackscount++
                            checkProperties(detaildata)
                            infos.push({ photourl, name: detaildata.name, rating: detaildata.rating, phone: detaildata.phone, address: detaildata.address, url: detaildata.url })
                            if (callbackscount == 5) {
                                let data = setRestaurantJson(infos)
                                return client.replyMessage(event.replyToken, data)
                            }
                        })
                    }
                })
                break
            default:
                // send random sticker of [zh_TW] 宇宙明星BT21（動態特別篇）
                let index = Math.floor(Math.random() * (52114149 - 52114110 + 1)) + 52114110 + ''
                return client.replyMessage(event.replyToken, {
                    type: 'sticker',
                    packageId: '11539',
                    stickerId: index
                })
        }
    } else if (event.message.type == 'location') {
        //handle weather forecast of type location
        forecast(event.message.latitude, event.message.longitude, (error, forecastData) => {
            if (error) {
                return error
            }
            let data = setWeatherJson('Local ', forecastData.weather, forecastData.temperature, forecastData.feelslike, forecastData.humidity)
            return client.replyMessage(event.replyToken, data)
        })
    }



}



module.exports = router