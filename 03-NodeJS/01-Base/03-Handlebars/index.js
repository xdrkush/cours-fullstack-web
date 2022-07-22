// Import Module global
const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

// Fake data
const array = require('./fakedata.json')

// Register Helpers
const { limitArray, upper } = require('./helpers')

// Config Handlebars
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: "MainLayout",
    adminLayout: "AdminLayout",
    helpers: {
        limitArray,
        upper
    }
}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Route fichier static
app.use('/assets', express.static('public'))

// Router
app.get('/', function (req, res) {
    res.render('pages/home', {
        list: array
    })
})
app.get('/contact', function (req, res) {
    res.render('pages/contact')
})
app.get('/admin', function (req, res) {
    res.render('pages/admin', {
        layout: 'AdminLayout'
    })
})

// Run server
app.listen(port, () => {
    console.log('Application run on port: ' + port)
})