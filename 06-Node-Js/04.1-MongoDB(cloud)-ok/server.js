const express = require('express')
const app = express()
const path = require('path')
const port = 3000
// Import de Mongoose
// Mongoose est une passerelle pour lier votre base de données MongoDB avec votre application
const mongoose = require('mongoose')

// Config MongoDB Atlas (Cloud)
const urlDB = 'mongodb+srv://drk:drk$@cluster0-z5xrj.mongodb.net/tuto?retryWrites=true&w=majority'

// Config Mongoose
mongoose
    .connect(urlDB, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connecter a MongoDB Cloud'))
    .catch(err => console.log(err));

// Config Handlebars
app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')

// Import du Model (Model)
const Model = require('./Model')

// Page Index racine 
// async = function asynchrone
app.get('/', async (req, res) => {
  // définition de la variable dbModel qui recherche tout les Objet Model depuis le Model (Model) 
  const dbModel = await Model.find({})
  // Log de tous les dbModel
  console.log('Test DB' + '\n' + dbModel)
  // et on rend la page index avec les data de dbModel
  // Ce qui nous permetra d'agrémenter notre liste Model
  res.render('index', {
    dbModel
  })
})

app.listen(port, function () {
  console.log("L'application tourne sur le port: " + port)
})
