const http = require('http');
const port = 4000;

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Pushpendra Kumar</h1>")
    res.end();
})

server.listen(port, ()=>{
    console.log("Pushpendra Kumar");
})