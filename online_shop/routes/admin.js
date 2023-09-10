const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

const Product = require('../models/product')

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.get('/delete-product/:productId', (req, res, next)=>{
    let id = req.params.productId;
    Product.delete(id);
    res.redirect('/')
  });



module.exports = router;
