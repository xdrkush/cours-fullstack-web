const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const path = require('path')
const port = 3000

// Import du fichier ./api/api.js
const API = require('./api/api')
// Import du fichier ./api/auth.js
const AUTH = require('./api/auth')
// Import du fichier ./api/router.js
const ROUTER = require('./api/router')

// Config MongoDB (Local)
const urlDB = 'mongodb://localhost:27017/test'
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
app.engine('hbs', hbs ({
  // helpers: { stripTags: stripTags },
  extname: 'hbs',
  defaultLayout: 'main'
}))
app.set('view engine', 'hbs')

// On demande à notre application d'utiliser notre variable Router
// à Partir de notre URL racine /
// Qui est en réaliter notre fichier ./api/router.js
app.use('/', ROUTER)

// On demande à notre application d'utiliser notre variable Router
// à Partir de notre URL racine /api
// Qui est en réaliter notre fichier ./api/api.js
app.use('/api', API)

// On demande à notre application d'utiliser notre variable Router
// à Partir de notre URL racine /auth
// Qui est en réaliter notre fichier ./api/auth.js
app.use('/auth', AUTH)

app.listen(port, function () {
  console.log("L'application tourne sur le port: " + port)
})
