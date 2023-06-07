function addToCart(productID) {
    fetch(`http://localhost:3000/cart/add/${productID}`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            console.log("Product added to the cart succesfully!")
            location.reload()
        } else {
            console.error("Failed to add product to cart")
        }
    }).catch(error => {
        console.error("An error occured while adding product to the cart")
    })
}

function removeFromCart(productID) {
    fetch(`http://localhost:3000/cart/remove/${productID}`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            console.log("Product removed from the cart succesfully!")
            location.reload()
        } else {
            console.error("Failed to remove product from cart")
        }
    }).catch(error => {
        console.error("An error occured while removing product from the cart")
    })
}