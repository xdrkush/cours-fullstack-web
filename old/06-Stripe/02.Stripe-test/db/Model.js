/*
 *
 * Model de 'Model'
 ******************************/

// Import de Mongoose
const mongoose = require('mongoose')

// Création de notre Shéma (Model)
// c'est le Model de (Model)
const ModelSchema = new mongoose.Schema ({
    // Première variable (basique)
    name: String,
    // Deuxieme variable (Objet) on pourra aussi lui rentré des conditions
    // On vera les condition plus tard (handlebars 3.3)
    email: { type: String }
})

// Et l'on export notre model grace à la passerelle Mongoose
// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = mongoose.model('Model', ModelSchema)
