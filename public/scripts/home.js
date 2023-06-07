function handleCategoryClick(categoryID) {
    let path = `http://localhost:3000/getProducts/${categoryID}`
    path = String(path)
    window.location.href=path
}

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