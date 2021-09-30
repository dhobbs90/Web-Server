//imports
var express = require('express');

var router = express.Router();

/*********** webroot **************/
router.get('/',(request,response)=>{
    response.render('index',{
        title: 'weather app',
        header: 'Welcome to a weåther app',
        body: 'this is some text'
    })
});

module.exports = router;