// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Import config db
require('./config/db');

// Process.env
require('dotenv').config()
const { PORT } = process.env

// Body Parser
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

// Router
const router = require('./router')
app.use('/api', router)

app.listen(PORT, () => {
    console.log('Application run on port: ', PORT)
})