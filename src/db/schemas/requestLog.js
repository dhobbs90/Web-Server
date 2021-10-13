const mongoose = require('mongoose');

//create the request
const requestLogSchema = new mongoose.Schema({
    clientip : {type: String, required: true},
    timestamp: {type: Date, required: true},
    accesskey: {type: String, required: true},
    result: {type: String, required: true},
});

requestLogSchema.methods.getUsersAccessKey = () =>{
    //Placeholder for retrieving the users access key getUsersAccessKey
    //this.accessKey=getUsersToken();
} 
//return the request so it can be created in the model
module.exports = requestLogSchema;