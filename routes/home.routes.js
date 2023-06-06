const { json } = require('express');
var express = require('express');
var router = express.Router();

//data
const mydata = require('../data/mydata')

//middleware za dohvaćanje kategorija, ono što se zapravo događa (dobra praksa => rastaviti ih u funkcije)
const getCategories = (req, res, next) => {

    const categories = mydata.categories
    
    //check
    //console.log(categories)

    //sending this data as response
    res.render('home', {categories: categories, products: undefined})
    next()
}

//middleware za dohvaćanje produkata
const getProducts = (req, res, next) => {

    const categoryID = req.params.id
    const categories = mydata.categories
    const products = mydata.categories[categoryID].products
    
    //check
    //console.log(products)

    //sending this data as response
    res.render('home', {categories: categories, products: products})
    next()

}

//get request (accepts the home path and middleware (one or more))
router.get('/', (req, res, next) => {
    res.redirect('/getCategories')
    next()
})
router.get('/getCategories', getCategories)  
router.get('/getProducts/:id', getProducts)

//get requestovi za svaku pojedinu kategoriju
module.exports = router;
