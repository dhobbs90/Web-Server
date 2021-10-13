//imports
const mongoose = require('mongoose');

const MONGO_USERNAME = 'webserveradmin';
const MONGO_PASSWORD = process.env.MONGO_PWD;
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'web-server-api';
const MONGO_AUTHSRC = 'admin';

//Mongo Connect URL
const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=${MONGO_AUTHSRC}`;

const mongoConnect = () => {
    mongoose.connect(MONGO_URL,{
        useNewUrlParser: true
    })
    .then(() => {
        console.log("connected to mongodb")
    })
    .catch((error) => {
        console.log(error)
    })
}

module.exports = mongoConnect;

/*
const insert = (clientIp,accesskey) => {
    return new Promise((resolve,reject) => {
        let Request = mongoClient.model('Request',requestSchema)

        let aRequest = new Request({
            clientip: clientIp,
            datetime: Date.now(),
            accesskey: accesskey
        })

        aRequest.save()
        .then((result) =>{
            resolve(result)
        })
        .catch((e)=>{
            console.log('error',e)
            reject(e)
        })
    })
}
*/