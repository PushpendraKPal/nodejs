const path = require('path');
const rootDir = require('../utils/path')

module.exports.home = (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'home.html'))
}

module.exports.contactus = (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'contact.html'))
}

module.exports.success = (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'success.html'))
}

module.exports.error = (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'error.html'))
}