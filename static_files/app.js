const express = require('express');
const path = require('path');
const rootDir = require('./utils/path')
const app = express();
const PORT = 3000;

app.use(express.static(path.join(rootDir, 'public')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

app.get('/contactus', (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'contact.html'))
})

app.post('/success', (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'success.html'))
})

app.use((req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'error.html'))
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}.`)
})