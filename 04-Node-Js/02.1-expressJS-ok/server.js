// import du framework ExpressJS
const express = require('express')
// Création de la variable app comme la function primaire du framework ExpressJS
const app = express()
// Import du module FS (fileSystem) (déplacer des fichiers dans notre dossier racine)
const fs = require('fs')

// création de la page racine de notre site
app.get('/', function (req, res) {
  // on envoi grace à res.send la chaine de charactère 'Hello Wolrd! ExpressJS'
  res.send('Hello World! ExpressJS')
})

// création de la page (mapage)
app.get('/mapage', function (req, res) {
  // on envoi grace à res.send la chaine de charactère 'Ma page'
  res.send('Ma Page')
})

// on demande à notre aaplication d'écouter le port 3000
// et à son démarrage de nous log 'Example app listening on port 3000!'
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})