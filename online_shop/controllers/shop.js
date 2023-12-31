const Cart = require('../models/cart');
const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getOneProduct = (req, res, next)=>{
  let productId = req.params.productId;
  Product.fetchOne(productId, product=>{
    res.render('shop/product-detail', {
      product: product,
      pageTitle: 'Shop',
      path: '/products/:productId'
    });
  })
 
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  let id = req.body.productId;
  let price = req.body.price;
  Cart.addToCart(id, price);
  res.redirect('/')
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
