/*
 *
 * Model de 'Commentary'
 ******************************/

// Import de Mongoose
const mongoose = require('mongoose')

const CommentarySchema = new mongoose.Schema ({
    author: String,
    authorId: String,
    isSuspend: Boolean,
    message: String,
    imgAuthor: String,
    isVerified: {
        type: Boolean,
        default: false
    },
    articleID: String,
    createDate: String
})

// Et l'on export notre model grace à la passerelle Mongoose
// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = mongoose.model('Commentary', CommentarySchema)
