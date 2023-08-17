const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;
    console.log(method)

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
    if(url === '/' && method === 'GET'){
        let data = fs.readFileSync('message.txt');
        res.setHeader('Content-Type', 'text/html')
        res.write(`<html lang="en"><body><h2>${data}</h2><form action="/message" method="post"><input type="text" name="message"><input type="submit" value="Send"></form></body></html>`)
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
        })
        req.on('end', ()=>{
            let parsedData = Buffer.concat(body).toString();
            let message = parsedData.split("=")[1];
            console.log(message);
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302 ;
            res.setHeader('Location', '/');
            return res.end();
        })
    }
});

server.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})