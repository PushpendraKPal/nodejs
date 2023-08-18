const express = require('express');

const app = express();



let router = express.Router();


router.get('/add-product', (req, res, next)=>{
    res.send('<html><body><form action="/admin/product" method="POST"><input type="text" name="title" placeholder="Product Name"><input type="text" name="size" placeholder="Product Size"><button type="submit">Add Product</button></form></body></html>')
})

router.post('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/shop')
})

module.exports = router; 
