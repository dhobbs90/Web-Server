//imports
const express = require('express')
const path = require('path')
const hbs = require('hbs')

//constants
const backend = express()
const port = 3000;


//paths used in express config
const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//set hbs(handlebars for express) as our express view engine to allow templating
backend.set('view engine','hbs')

//set our views directory
backend.set('views',viewsPath)

//register our partials path with hbs
hbs.registerPartials(partialsPath)

//mount the /webserver/public file structure
backend.use(express.static(publicPath));

/***************************************
    endpoint handling
****************************************/

    /*********** webroot **************/
    backend.get('',(request,response)=>{
        response.render('index',{
            title: 'weather app',
            header: 'Welcome to a weåther app',
            body: 'this is some text'
        })
    });

    /*********** /help **************/
    backend.get('/help',(request,response)=>{
        response.render('index',{
            title: 'weather app - help',
            header: 'this is a helpful page',
            body: 'this is some helpful text'
        })
    });

    /*********** /weather **************/
    backend.get('/weather',(request,response)=>{
        response.send({
            "location":"Montreal, QC",
            "forcast":"Cloudy"
        })
    });

    /*********** /about **************/
    backend.get('/about',(request,response)=>{
        response.sendFile(path.join(publicPath,'/html/about.html'))
    });

/***************************************
   END endpoint handling
****************************************/

//initialize our web server
backend.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});