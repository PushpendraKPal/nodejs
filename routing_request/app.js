const http = require('http');
const express = require('express');

let app = express();

const server = http.createServer(app);

app.use((req, res, next)=>{
    console.log("In the Frist middleware");
    next();
})

app.use((req, res, next)=>{
    console.log("In the second middleware");
    res.send('<h2>Welcome to Express!</h2>')
})

server.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})