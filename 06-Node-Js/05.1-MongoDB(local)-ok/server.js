const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const mongoose = require('mongoose')

// Config MongoDB (Local)
// Il faut absolument télécharger et configurer MongoDB
const urlDB = 'mongodb://localhost/test'

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
app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')

// Models
const Model = require('./Model')

// Page Index racine 
app.get('/', async (req, res) => {
  const dbModel = await Model.find({})

  res.render('index', {
    dbModel
  })
})

app.listen(port, function () {
  console.log("L'application tourne sur le port: " + port)

})
