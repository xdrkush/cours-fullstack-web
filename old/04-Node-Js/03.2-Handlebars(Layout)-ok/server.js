const express = require('express')
const app = express()
// import du module Body Parser
// Body Parser Nous sert pour échanger des data d'une page à l'autre
// il parse les données
const bodyParser = require('body-parser')
// import de Express-Handlebars
// Ce module est prévu pour que Handlebars et ExpressJS fonctionne ensemble plus simplement
const hbs = require('express-handlebars')
const path = require('path')
// Définition de notre variable de port
const port = 3000

// Le router un fichier qui nous permetra de simplifié nos routes
// Router
const ROUTER = require('./api/router')

// Config Body-Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Config Handlebars (Avancé)
app.engine('hbs', hbs({
  // Nom de l'extension
  extname: 'hbs',
  // Définition du layout par default
  defaultLayout: 'main',
  // Définition du chemin des Layouts
  layoutsDir: __dirname + '/views/layouts/',
  // Définition du chemin des Partials
  partialsDir: __dirname + '/views/partials/'
}))
app.set('view engine', 'hbs')

// On demande d'utilisé notre fichier Router par l'app en tant que racine
app.use('/', ROUTER)

app.listen(port, function () {
  console.log("L'application tourne sur le port: " + port)
})
