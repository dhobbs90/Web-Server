//Imports
const axios = require('axios');

//base weatherstack URL for our api call
const weatherStackUrl="http://api.weatherstack.com/current";

//our api call to weatherstack.com
const forcast = (coords, apikey) => {

    //build our api call string for weatherstack in the format:
    //http://api.weatherstack.com/current?access_key=1234567890&query=45.5017,-73.5673
    apiCallString = `${weatherStackUrl}?access_key=${apikey}&query=${coords}`;
    

    //build our promise which will use axios to make our api call
    return new Promise((resolve, reject) =>{
        axios.get(apiCallString)
        .then((response) => {
            resolve({
                forcast: response.data.current.weather_descriptions[0],
                tempature: response.data.current.temperature,
                city: response.data.location.name,
                province: response.data.location.region,
                country: response.data.location.country,
                time: response.data.current.observation_time,
                icon: response.data.current.weather_icons[0],
            })
        })
        .catch((error) => {
            console.log(error)
            reject(error);
        });
    })
}

module.exports = forcast