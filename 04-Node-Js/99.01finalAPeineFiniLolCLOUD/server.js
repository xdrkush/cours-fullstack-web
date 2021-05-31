const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const path = require('path')
const port = 3000
// Import de express-session
// Pour pouvoir déclaré la session au moment du login dans 
// ./api/auth.js
const expressSession = require('express-session')
// Récupération du store de Mongo Connect
const MongoStore = require('connect-mongo')
// déclaration de la variable de récupération du store
const mongoStore = MongoStore(expressSession)
const router = express.Router()
// Import de nodemailer
const nodemailer = require('nodemailer')

// Api routes
// Déclaration de la variable des routes api
// ./api/api
const API = require('./api/api')
// Déclaration des variable d'authentification
// ./api/auth
const AUTH = require('./api/auth')
// Déclaration de la variable des Routes
// ./api/router
const ROUTER = require('./api/router')
// Déclaration de la variable de Nodemailer
// ./api/nodemailer
const NODEMAILER = require('./api/nodemailer')

// Config MongoDB (Local)
// const urlDB = require('./db/config.json').keyDbLocal
const urlDB = require('./db/config.json').keyDbCloud

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
  .then(() => console.log('Connecter a MongoDB Cloud ( Attention !!! créé nouveau utilisateur )'))
  .catch(err => console.log(err))

// Express-Session
// Déclaration de notre cookie
app.use(expressSession(
  {
    // Déclaration de la fonction du cookie
    secret: 'securite',
    // Déclaration du nom de notre cookie
    name: 'Coucou',
    // Déclaration de la sauvegarde de notre cookie
    saveUninitialized: true,
    // es ce qu'il précharge notre cookietre cookie
    resave: false,
    // déclaration de l'utilisation de no
    store: new mongoStore(
        { mongooseConnection: mongoose.connection }
    )
  }
))

// Config Handlebars
app.engine('hbs', hbs ({
  // helpers: { stripTags: stripTags },
  extname: 'hbs',
  defaultLayout: 'main'
}))
app.set('view engine', 'hbs')

// Import et utilisation de tous les fichiers et dossier depuis 'assets'
app.use('/assets', express.static('assets'));

// Déclaration de middleWare (session)
app.use('*', (req, res, next) => {
  // Déclaration et utilisation de notre session
  // en corélation avec notre base de donnée
  res.locals.user = req.session.userId;
  // Déclaration de notre condition middleware status
  if (req.session.status === 'user') {
      // Utilisation de notre middleware
      res.locals.user = req.session.status
  }
  // Déclaration de notre condition middleware status
  else if (req.session.isVerified === true) {
      // Utilisation de notre middleware
      res.locals.isVerified = req.session.isVerified
  }
  // La function next permet qu'une fois la condition effectuer il reprenne son chemin
  next()
})

// On demande à notre application d'utiliser notre variable Router
// à Partir de notre URL racine /
// Qui est en réaliter notre fichier ./api/router.js
app.use('/', ROUTER)

app.listen(port, function () {
  console.log("L'application tourne sur le port: " + port)
})
