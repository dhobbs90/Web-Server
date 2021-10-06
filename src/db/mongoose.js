const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/web-server-api',{
    useNewUrlParser: true
})

const requestSchema = new mongoose.Schema({
    clientip : String,
    datetime: Date,
    accesskey: String,
});

const Request = mongoose.model('Request',requestSchema)

const aRequest = new Request({
    clientip: '172.16.0.0',
    datetime: '2002-12-09',
    accesskey: 'H(!ASND(*!U@(Y#BASD'
})

aRequest.save().then(() =>{
    console.log('saved')
})
.catch((e)=>{
    console.log('error',e)
})