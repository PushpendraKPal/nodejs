const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const {addProductData, addProductPage} = require('../controllers/products')

const router = express.Router();

const Product = require('../model/product');

// /admin/add-product => GET
router.get('/add-product', addProductPage);

// /admin/add-product => POST
router.post('/add-product', addProductData);

exports.routes = router;
