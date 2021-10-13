const mongoose = require('mongoose');
const requestLogSchema = require('../schemas/requestLog');

//create the request model
module.exports = mongoose.model('requestLog',requestLogSchema)
