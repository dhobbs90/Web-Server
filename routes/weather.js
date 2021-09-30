var express = require('express');
const forcast = require('../utils/forcast')
const verifyApiKey = require('../utils/verifyApiKey')

var router = express.Router();

/*********** /weather **************/
router.get('/',(request,response)=>{

    if(!request.query.coords){
        return response.send({
            error: 'you must provide coordinates'
        })
    }

    if(!verifyApiKey()){
        return response.send({
            error: 'the weatherstack api key is not configured on the server'
        })
    }

    console.log(request.query.coords)


    //call the weatherstack api and get our forcast data back
    forcast(request.query.coords, process.env.API_KEY, (error, data) => {
        if(error){
            return response.send({
                error: error
            })
        }
        
        response.send({
            tempature: data.tempature,
            forcast: data.forcast,
            coords: request.query.coords
        })
    })
});

module.exports = router;