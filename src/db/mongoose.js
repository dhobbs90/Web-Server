const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/web-server-api',{
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