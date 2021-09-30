//imports
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const forcast = require('../utils/forcast')
const verifyApiKey = require('../utils/verifyApiKey')

//load .env enviroment variables
require('dotenv').config();

//constants
const app = express()
const port = 3000;


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

/***************************************
    endpoint handling
****************************************/

    /*********** webroot **************/
    app.get('',(request,response)=>{
        response.render('index',{
            title: 'weather app',
            header: 'Welcome to a weåther app',
            body: 'this is some text'
        })
    });

    /*********** /help **************/
    app.get('/help',(request,response)=>{
        response.render('help',{
            title: 'weather app - help',
            header: 'this is a helpful page',
            body: 'this is some helpful text'
        })
    });

    /*********** /weather **************/
    app.get('/weather',(request,response)=>{

        if(!request.query.coords){
            return response.send({
                error: 'you must provide coordinates'
            })
        }

        if(!verifyApiKey()){
            return response.send({
                error: 'the weatherstack api key is not configured on the server'
            })
        }

        console.log(request.query.coords)


        //call the weatherstack api and get our forcast data back
        forcast(request.query.coords, process.env.API_KEY, (error, data) => {
            if(error){
                return response.send({
                    error: error
                })
            }
            
            response.send({
                tempature: data.tempature,
                forcast: data.forcast,
                coords: request.query.coords
            })
        })
    });

    /*********** /about **************/
    app.get('/about',(request,response)=>{
        response.sendFile(path.join(publicPath,'/html/about.html'))
    });

    /*********** /help 404 Error **********/
    app.get('/help/*',(request,response)=>{
        response.render('error',{
            title: 'weather app - help - page not found',
            header: '/help/* 404 page not found',
            body: 'sorry :\'('
        })
    });
    /*********** catch all 404 Error ********/
    app.get('*',(request,response)=>{
        response.render('error',{
            title: 'weather app - page not found',
            header: '404 page not found',
            body: 'sorry :\'('
        })
    });
/***************************************
   END endpoint handling
****************************************/

//initialize our web server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});