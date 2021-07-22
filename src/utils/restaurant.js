require('dotenv').config()
const request = require('request')



//Forecasting weather
const restaurant = (callback) => {
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=24.988033,121.577408&opennow=true&radius=1500&type=restaurant&language=zh-TW&key=' + process.env.GOOGLE_API_KEY
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to get info!', undefined)
        } else if (body.error) {
            callback('Unable to get info!', undefined)
        } else {
            // console.log(body.results)
            let placesinfo = body.results.map(item => item = { placeId: item.place_id, photoreference: item.photos[0].photo_reference })
            // console.log(placesinfo)
            callback(undefined, placesinfo)
        }
    })
}

//random google restaurant results and return 5 results
const randomrestaurant = (restaurants) => {
    // restaurants.sort(() => Math.random() - 0.5);
    //Fisher-Yates Shuffle
    for (let i = restaurants.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [restaurants[i], restaurants[j]] = [restaurants[j], restaurants[i]];
    }
    return restaurants.slice(0, 5)
}


//fetch restaurant detail info
const restaurantdetail = (placeId, callback) => {
    const url = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=' + placeId + '&fields=name,url,rating,formatted_phone_number,formatted_address&language=zh-TW&key=' + process.env.GOOGLE_API_KEY
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to get info!', undefined)
        } else if (body.error) {
            callback('Unable to get info!', undefined)
        } else {
            // console.log(body.result)
            if (body.result.rating) {
                body.result.rating = body.result.rating + ''
            }
            callback(undefined, { name: body.result.name, url: body.result.url, rating: body.result.rating, phone: body.result.formatted_phone_number, address: body.result.formatted_address })
        }
    })
}
//return restaurant photourl
const restaurantphoto = (reference) => {
    const photourl = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=250&photoreference=' + reference + '&key=' + process.env.GOOGLE_API_KEY
    return photourl
}

module.exports = {
    restaurant,
    restaurantphoto,
    restaurantdetail,
    randomrestaurant,
}
