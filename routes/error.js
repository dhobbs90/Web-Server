var express = require('express');

var router = express.Router();

/*********** catch all 404 Error ********/
router.get('/',(request, response, next)=>{
    response.render('error',{
        title: 'weather app - page not found',
        header: '404 page not found',
        body: 'sorry :\'('
    })
});

module.exports = router;