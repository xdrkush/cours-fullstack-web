/*
 *
 * Model de 'Mp'
 ******************************/

// Import de Mongoose
const mongoose = require('mongoose')

const MpSchema = new mongoose.Schema ({
    author: String,
    authorId: String,
    dest: String,
    destId: String,
    isSuspend: Boolean,
    message: String,
    subject: String,
    imgAuthor: String,
    imgDest: String,
    admin: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    articleID: String,
    createDate: String
})

// Et l'on export notre model grace à la passerelle Mongoose
// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = mongoose.model('Mp', MpSchema)
