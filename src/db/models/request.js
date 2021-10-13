const mongoose = require('mongoose');
const requestSchema = require('../schemas/request');

//create the request model
module.exports = mongoose.model('request',requestSchema)
