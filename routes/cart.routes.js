var express = require('express');
var router = express.Router();

//middlewares, ono što se zapravo vraća
const addProduct = async (req, res, next) => {

    //add product to the cart logic
    const productId = req.params.id;

    // Retrieve the cart from the session or create a new one if it doesn't exist
    const cart = req.session.cart || [];
    const existingProduct = cart.find(item => item.id === productId) 

    // Add the product to the cart
    if (existingProduct) {
        existingProduct.quantity += 1
    } else {
        cart.push({ id: productId, quantity: 1 });
    } 

    // Update the cart in the session
    req.session.cart = cart;

    //check
    console.log(req.session.cart)
    //all ok

    let sum = 0
    req.session.cart?.forEach(item => {
        sum += item.quantity
    })

    res.sendStatus(200)   
}

const removeProduct = async (req, res, next) => {


        //add product to the cart logic
        const productId = req.params.id;

        // Retrieve the cart from the session or create a new one if it doesn't exist
        const cart = req.session.cart;
        const existingProduct = cart?.find(item => item.id === productId) 
    
        // Add the product to the cart
        if (existingProduct.quantity > 1) {
            existingProduct.quantity -= 1
        } else if (existingProduct.quantity = 1) {
            cart.pop(existingProduct)
        } 
    
        // Update the cart in the session
        req.session.cart = cart;
    
        //check
        console.log(req.session.cart)
        //all ok

        let sum = 0
        req.session.cart?.forEach(item => {
            sum += item.quantity
        })
    
        res.sendStatus(200)
}

const getAllProducts = (req, res, next) => {


    //check
    console.log(req.session.cart)
    //all good
    
    //sum code
    let sum = 0
    req.session.cart?.forEach(item => {
        sum += item.quantity
    })

    //check
    console.log(sum)
    //all good

    res.render("cart", {helper: req.session.cart, sum: sum})
    res.render("header", {helper: req.session.cart, sum: sum})

}

router.get('/', (req, res, next) => {
    res.redirect('/cart/getAll')
    next()
})
router.post('/add/:id', addProduct)
router.post('/remove/:id', removeProduct)
router.get('/getAll', getAllProducts)

module.exports = router;
