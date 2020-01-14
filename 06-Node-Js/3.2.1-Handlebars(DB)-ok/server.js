const express = require('express')
// Import de mogoose qui est la passerelle pour lié notre app
// Avec notre base de donnée MongoDB
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const path = require('path')
const port = 3000

// API est le fichier avec les controllers type api
const API = require('./api/api')
// ROUTER est le fichier avec les controllers type page (redirection, ...)
const ROUTER = require('./api/router')

// Config MongoDB (Local)
const urlDB = 'mongodb://localhost/test'
// const urlDB = 'mongodb+srv://drk:drk$@cluster0-z5xrj.mongodb.net/tuto?retryWrites=true&w=majority'

//  Body-Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Config Mongoose
mongoose
  .connect(urlDB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connecter a MongoDB Local'))
  .catch(err => console.log(err))

// Config Handlebars
app.engine('hbs', hbs({
  // helpers: { stripTags: stripTags },
  extname: 'hbs',
  defaultLayout: 'main'
}))
app.set('view engine', 'hbs')

// On demande a notre app utilisé a partir de l'URL ('/')
// c'est a dire la racine de notre site 
// ('http://127.0.0.1:3000', 'localhost:3000', 'monsupersite.fr', ...)
app.use('/', ROUTER)

// On demande a notre app utilisé a partir de l'URL ('/api')
// c'est a dire la racine de votre API <- /api
// ('http://127.0.0.1:3000/api', 'localhost:3000/api', 'monsupersite.fr/api', ...)
// tous les chemins a l'intérieur de ce fichier auront /api/mon/chemin
// et sera défini /mon/chemin a l'intérieur vu que le suffixe est deja la racine de l'API
app.use('/api', API)

app.listen(port, function () {
  console.log("L'application tourne sur le port: " + port)
})
