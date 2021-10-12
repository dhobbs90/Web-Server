const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    clientip : {type: String, required: true},
    datetime: {type: Date, required: true},
    accesskey: {type: String, required: true},
});

module.exports = mongoose.model('request',requestSchema)