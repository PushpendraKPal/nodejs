const http = require('http');

const server = http.createServer((req, res)=>{
    const url = req.url;

    if(url === '/home'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><h1>Welcome Home!</h1></Body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/about'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><h1>Welcome to About Us Page!</h1></Body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/node'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><h1>Welcome to NodeJS Page!</h1></Body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><h1>Welcome to my nodeJS project!</h1></Body>');
        res.write('</html>');
        return res.end();
    }
});

server.listen(4000, ()=>{
    console.log("server is listening on port 4000")
})