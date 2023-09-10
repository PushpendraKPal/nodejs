const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  static addToCart(id, price){
    
    fs.readFile(p,(err,data)=>{
      if(!err){
        let cart = {products:[], totalPrice:0};
        //console.log(data.toString());
        cart = JSON.parse(data)
        
        let existingProduct = cart.products.findIndex(prod=>prod.id === id);
        if(existingProduct !== -1){
          let updatedProduct = {...cart.products[existingProduct]}
          updatedProduct.qty +=1;
          cart.products[existingProduct]= updatedProduct;
          cart.totalPrice += Number(price);
          //console.log(cart);
          fs.writeFile(p,JSON.stringify(cart),err=>{
            console.log(err);
          })
        }else{
          cart.products.push({id, qty:1})
          cart.totalPrice+= Number(price);
          fs.writeFile(p,JSON.stringify(cart),err=>{
            console.log(err);
          })
        }
      }else{
        console.log(err);
      }
    })
  }
}

