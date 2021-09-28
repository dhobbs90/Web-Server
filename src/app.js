//imports
const express = require('express')
const path = require('path')

//constants
const backend = express()
const port = 3000;
const publicPath = path.join(__dirname,'../public')

//mount the /webserver/public file structure
backend.use(express.static(publicPath));

/***************************************
    endpoint handling
****************************************/

    /*********** webroot **************/
    backend.get('',(request,response)=>{
        response.sendFile(path.join(publicPath,'/html/index.html'))
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