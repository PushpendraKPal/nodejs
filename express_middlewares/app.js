const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.get('/add-product', (req, res, next)=>{
    res.send('<html><body><form action="/product" method="POST"><input type="text" name="title" placeholder="Product Name"><input type="text" name="size" placeholder="Product Size"><button type="submit">Add Product</button></form></body></html>')
})

app.post('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next)=>{
    res.send('<h2>Welcome to Express!</h2>');
})

app.listen(4000, ()=>{
    console.log("App is running on port 4000");
})


//