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
    let sum = 0
    req.session.cart?.forEach(item => {
        sum += item.quantity
    })

    //sending this data as response
    res.render('home', {categories: categories, products: undefined, sum: sum})
    next()
}

//middleware za dohvaćanje produkata
const getProducts = (req, res, next) => {

    const categoryID = req.params.id
    const categories = mydata.categories
    const products = mydata.categories[categoryID].products
    const cart = req.session.cart || []
    //check
    //console.log(products)
    let sum = 0
    req.session.cart?.forEach(item => {
        sum += item.quantity
    })

    //sending this data as response
    res.render('home', {categories: categories, products: products, cart: cart, sum: sum})
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
