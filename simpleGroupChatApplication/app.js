const express = require('express');
const bodyParser = require('body-parser');
const localStorage = require('localStorage');
const PORT = 3000;

const app = express();

let data = [
    {
        "userName": "Kumar",
        "message":"Hello Ravina"
    },
    {
        "userName": "Ravina",
        "message":"Hello Kumar"
    },
    {
        "userName": "Kumar",
        "message":"How are you!"
    },
    {
        "userName": "Ravina",
        "message":"I am fine, what about you"
    },
    {
        "userName": "Kumar",
        "message":"You better know, how am I without you"
    },
    {
        "userName": "Ravina",
        "message":"OH!... "
    }
]

localStorage.setItem('chats', JSON.stringify(data));
let chats = JSON.parse(localStorage.getItem('chats'));
console.log(chats);

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res)=>{
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user);
    res.send(`<!DOCTYPE html>
    <html>
    <body>
        <div class="container">
            <div class="chats" id="chats">
            <div class="form">
                <form action="/message" method="post">
                    <label for="msg">Your Message</label>
                    <input type="text" id="msg" name="message" >
                    <input type="submit" value="Send">
                </form>
            </div>
        </div>
        </div>
    </body>
    </html>`);
})

app.post('/message', (req, res)=>{
    let {message} = req.body;
    let currentUser = JSON.parse(localStorage.getItem('user'));
    console.log(currentUser, message);
    res.redirect('/')
})

app.get('/login', (req, res)=>{
    res.send(`<!DOCTYPE html>
    <html>
    <body>
        <form action="/user" method="post">
            <input type="text" name="userName">
            <input type="submit" name="" value="Login">
        </form>
    </body>
    </html>`)
})

app.post('/user', (req, res)=>{
    let userName = req.body.userName;
    localStorage.setItem(JSON.stringify('user', userName))
    res.redirect('/')
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})