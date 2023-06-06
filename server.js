const express = require('express');
const app = express();
var path = require('path');

const homeRouter = require('./routes/home.routes');
const cartRouter = require('./routes/cart.routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//za sve zahtjeve se ove funkcije moraju odraditi

//setting routing in views folder
app.use(express.static(path.join(__dirname, 'public')));

//setting middleware for default route
app.use('/', homeRouter);

//setting middleware for /cart route
app.use('/cart', cartRouter)

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
