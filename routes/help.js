var express = require('express');

var router = express.Router();

/*********** /help **************/
router.get('/',(request,response)=>{
    response.render('help',{
        title: 'weather app - help',
        header: 'this is a helpful page',
        body: 'this is some helpful text'
    })
});

/*********** /help 404 Error **********/
router.get('/*',(request,response)=>{
    response.render('error',{
        title: 'weather app - help - page not found',
        header: '/help/* 404 page not found',
        body: 'sorry :\'('
    })
});

module.exports = router;