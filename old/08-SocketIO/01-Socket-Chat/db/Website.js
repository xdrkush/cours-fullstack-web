/*
 *
 * Model de 'Website'
 ******************************/

// Import de Mongoose
const mongoose = require('mongoose')

// Création de notre Shéma (Model)
// c'est le Model de (Model)
const WebsiteSchema = new mongoose.Schema ({
    // Première variable (basique)
    name: String,
    header: {
        title: String,
        stitle: Array,
        button: Object
    },
    section: {
        title: String,
        stitle: Array,
        button: Object
    },
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
module.exports = mongoose.model('Website', WebsiteSchema)
