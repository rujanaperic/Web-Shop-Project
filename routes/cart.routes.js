var express = require('express');
var router = express.Router();

//middlewares, ono što se zapravo vraća

router.get('/', function(req, res, next) {
    res.render('cart', {
        title: 'My cart'
    });
});

module.exports = router;
