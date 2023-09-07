const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

let chat;


app.get('/login', (req, res)=>{
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<body>
    <form action="/" method="get" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
    <input type="text" id="username" name="username">
    <input type="submit" value="Enter">
    </form>
</body>
</html>
    `)
})

app.get('/', (req, res)=>{
    fs.readFile('data.txt', (err, data)=>{
        if(err){
            chat = "No chats Availiable"
            console.log(err)
        }else{
            chat = data;
        }
        res.send(`
        <!DOCTYPE html>
    <html lang="en">
    <body>
        ${chat}
        <form action="/message" method="post" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
        <input type="hidden" id="username" name="username">
        <input type="text" id="message" name="message">
        <input type="submit" value="Send">
        </form>
    </body>
    </html>
        `)
    })
})

app.post('/message', (req, res)=>{
let newMsg = req.body;
console.log(newMsg);
fs.writeFile('data.txt',`${newMsg.username}: ${newMsg.message} \n`, {flag: 'a'},(err)=>{
err?console.log(err): res.redirect('/');   
})
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}.`)
})