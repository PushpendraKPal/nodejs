const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random();
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static fetchOne(id, cb){
    getProductsFromFile(products=>{
      const product = products.find(p=>p.id == id)
      cb(product);
    })
  }

  static edit(item){
    getProductsFromFile(products=>{
      //console.log(item);
      const product = products.findIndex(p=>p.id == item.id)
      products[product] = {...item}
      //console.log(products[product]);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    })
  }

  static delete(id){
    console.log(id);
    getProductsFromFile(products=>{
      products = products.filter(p=>p.id!= id)
      console.log(products);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    })
  }
};
