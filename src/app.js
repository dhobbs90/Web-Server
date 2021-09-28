//imports
const express = require('express')
const path = require('path')

//constants
const backend = express()
const port = 3000;
const publicPath = path.join(__dirname,'../public')

//set hbs(handlebars for express) as our express view engine to allow templating
backend.set('view engine','hbs')

//set our views directory to Web-Server/views
backend.set('views',path.join(__dirname,'../views'))

console.log(__dirname)
//mount the /webserver/public file structure
backend.use(express.static(publicPath));

/***************************************
    endpoint handling
****************************************/

    /*********** webroot **************/
    backend.get('',(request,response)=>{
        response.render('index')
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