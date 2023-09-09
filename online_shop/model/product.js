const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path')


module.exports = class Product{
    constructor(title){
        this.title = title
    }
    save=()=>{
        //console.log("SEven")
        let products = [];
        fs.readFile(path.join(rootDir, 'data', 'product.json'), (err, data)=>{
            if(!err){
                products = JSON.parse(data);
            }
                products.push(this);

                fs.writeFile(path.join(rootDir, 'data', 'product.json'), JSON.stringify(products), (err)=>{
                    console.log(err)
                });
            }
    )}

    static fetchAll = (callback)=>{
        fs.readFile(path.join(rootDir, 'data', 'product.json'), (err, data)=>{
            if(err){
                console.log(err);
                callback([]);
            }else{
                let products = JSON.parse(data);
                callback(products)
            }
        })
    }
}