const mongoose = require('mongoose')

const MONGO_USERNAME = 'webserveradmin';
const MONGO_PASSWORD = 'webserveradmin';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'web-server-api';
const MONGO_AUTH = 'admin';


const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(MONGO_URL,{
    useNewUrlParser: true
})

const requestSchema = new mongoose.Schema({
    clientip : {type: String, required: true},
    datetime: {type: Date, required: true},
    accesskey: {type: String, required: true},
});

const Request = mongoose.model('Request',requestSchema)

const aRequest = new Request({
    clientip: '172.16.0.0',
    datetime: Date.now(),
    accesskey: 'H(!TEST(*!U@(Y#BASD'
})
 
aRequest.save().then(() =>{
    console.log('saved')
})
.catch((e)=>{
    console.log('error',e)
})