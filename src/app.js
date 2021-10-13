//import express and our router endpoints
const express = require('express'),
        root    = require('../routes/root'),
        error    = require('../routes/error'),
        help   = require('../routes/help'),
        weather   = require('../routes/weather'),
        about   = require('../routes/about');

//other imports
const path = require('path')
const hbs = require('hbs');

//setup mongoose
const mongoConnect = require('./db/mongoose');

//setup mongodb and connect
mongoose = require('./db/mongoose')

//load .env enviroment variables
require('dotenv').config();

//constants
const app = express()
const port = process.env.PORT | 3000;

//paths used in express config
const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//configure hbs(handlebars for express) to handle our html templates
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//mount /Web-Server/public to expose our public resources(css,client js,etc)
app.use(express.static(publicPath));

//set our application endpoints
app.use('/',  root);
app.use('/help', help);
app.use('/weather',  weather);
app.use('/about', about);
app.use('*',  error);

//initialize our web server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
    mongoConnect();
});