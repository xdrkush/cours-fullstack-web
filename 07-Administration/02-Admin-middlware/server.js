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
// Import config Passport
const passport = require('passport')
const passportSetup = require('./config/passport-setup')

// Déclaration de la variable des Routes
// ./api/router
const ROUTER = require('./api/router')

// Keys
const keys = require('./config/keys')

// Config MongoDB (Local)
const urlDB = keys.mongodb.DbLocal
// const urlDB = require('./db/config.json').keyDbCloud

//  Body-Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// PassportJS
app.use(passport.initialize())
app.use(passport.session())

// Config Mongoose
mongoose
  .connect(urlDB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connecter a MongoDB Cloud ( Attention !!! )'))
  .catch(err => console.log(err))

// Express-Session
// Déclaration de notre cookie
app.use(expressSession(
  {
    // Déclaration de la fonction du cookie
    secret: keys.session.secret,
    // Déclaration du nom de notre cookie
    name: keys.session.cookieName,
    keys: keys.session.keys,
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

// Config Handlebars (Avancé)
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}))
app.set('view engine', 'hbs')

// Import et utilisation de tous les fichiers et dossier depuis 'assets'
app.use('/assets', express.static('assets'));

// Déclaration de middleWare (session)
app.use('*', (req, res, next) => {
  if (res.locals.user = req.session.userId) {
    if (req.session.status === 'user') {
      if (req.session.isVerified === true) {
        // if (req.session.isModo === true) {
          if (req.session.isAdmin === true) {
            res.locals.user = req.session.status
            res.locals.isVerified = req.session.isVerified
            res.locals.isAdmin = req.session.isAdmin
            res.locals.isModo = req.session.isModo
            console.log('4');

          }
        //   res.locals.user = req.session.status
        //   res.locals.isVerified = req.session.isVerified
        //   res.locals.isModo = req.session.isModo
        //   console.log('3');

        // }
        res.locals.isVerified = req.session.isVerified
        res.locals.user = req.session.status
        console.log('2');

      }
      res.locals.user = req.session.status
      console.log('1');

    }
  }
  console.log('0');

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
