//imports
var express = require('express');
const forcast = require('../utils/forcast')
const verifyApiKey = require('../utils/verifyApiKey')

var router = express.Router();

/*********** /weather **************/
router.get('/',(request,response)=>{

    //throw error if coordinates were not received
    if(!request.query.coords){
        return response.send({
            error: 'you must provide coordinates'
        })
    }

    //throw error weatherstack API_KEY was not found in .env
    if(!verifyApiKey()){
        return response.send({
            error: 'the weatherstack api key is not configured on the server'
        })
    }

    //call the webroot/weather endpoint, call weatherstack.com, get our forcast data, then send it to the client
    forcast(request.query.coords, process.env.API_KEY)
        .then(data => {
                response.send({
                    coords: request.query.coords,
                    tempature: data.tempature,
                    forcast: data.forcast,
                    city: data.city,
                    province: data.province,
                    country: data.country,
                    time: data.time,
                    icon: data.icon
                })
            }
        )
        .catch(error => {
            response.send({
                error: error
            })
        })
    
});

module.exports = router;