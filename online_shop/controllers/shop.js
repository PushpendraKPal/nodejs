const Product = require('../model/product')

module.exports.shop = (req, res, next) => {
  //console.log(Product.fetchAll);
    Product.fetchAll((products)=>{
      res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    })
  }
  