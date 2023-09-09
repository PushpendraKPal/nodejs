const Product = require('../model/product')

module.exports.addProductPage = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

module.exports.addProductData = (req, res, next) => {
    new Product(req.body.title).save(); 
    res.redirect('/');
  }
