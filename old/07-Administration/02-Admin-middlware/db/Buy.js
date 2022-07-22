/*
 *
 * Model de 'Article'
 ******************************/

// Import de Mongoose
const mongoose = require('mongoose')

// Création de notre Shéma (Model)
// c'est le Model de (Model)
const BuySchema = new mongoose.Schema ({
    // Première variable (basique)
    author: String,
    authorId: String,
    message: String,
    quantity: Number,
    formatDate: Date,
    name: String,
    artID: String,
    price: String,
    isSuspend: Boolean,
    description: String,
    imgArticle: String,
    imgDescr: String,
    promo: Number,
    taille: String,
    isVerified: {
        type: Boolean,
        default: false
    },
    articleID: Number
})

// Et l'on export notre model grace à la passerelle Mongoose
// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = mongoose.model('Buy', BuySchema)
