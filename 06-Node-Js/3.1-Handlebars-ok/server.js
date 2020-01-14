const express = require('express')
// Import Express-Handlebars
const hbs = require('express-handlebars')
const app = express()
// path est un module que nous permet de se retrouver dans l'arborescence 
const path = require('path')

// Config Handlebars
// définition du chemin racine, et du nom de notre de dossier contenant notre handlebars
// Petit Tricks plutot que d'utiliser .handlebars
// nous definissons le raccourcie prévu par handlebars d'utiliser .hbs
app.set('view engine', 'hbs')

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultView: 'default',
  }
))
// app.set('view engine', 'hbs')


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/test', (req, res) => {
  res.render('test')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
