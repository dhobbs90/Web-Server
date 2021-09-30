//imports
var express = require('express');

var router = express.Router();

/*********** /about **************/
router.get('/',(request,response)=>{
    response.render('about',{
        title: 'weather app -about',
        header: 'Some info about me',
        body: 'some content about me'
    })
});

module.exports = router;