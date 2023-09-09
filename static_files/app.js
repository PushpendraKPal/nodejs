const express = require('express');
const path = require('path');
const rootDir = require('./utils/path');
const controller = require('./controllers/controller');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(rootDir, 'public')))

app.get('/', controller.home)

app.get('/contactus', controller.contactus)

app.post('/success', controller.success)

app.use(controller.error)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}.`)
})