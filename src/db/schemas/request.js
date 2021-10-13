const mongoose = require('mongoose');

//create the request
const requestSchema = new mongoose.Schema({
    clientip : {type: String, required: true},
    datetime: {type: Date, required: true},
    accesskey: {type: String, required: true},
});

requestSchema.methods.getUsersAccessKey = () =>{
    //Placeholder for retrieving the users access key getUsersAccessKey
    //this.accessKey=getUsersToken();
} 
//return the request so it can be created in the model
module.exports = requestSchema;