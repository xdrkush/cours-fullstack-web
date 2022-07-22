// Import de modules
const mongoose = require('mongoose')

// Config
require('dotenv').config();
const { MONGO_URI } = process.env;

// Config MongoDB
const urlDb = 

// Connect Node (mongoose) -> MongoDB
mongoose.connect(urlDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Create Model
const ArticleSchema = new mongoose.Schema({
    // Première variable (basique)
    title: String,
    price: String
})
// Model
const Article = mongoose.model('Article', ArticleSchema)

// Create
Article.create({
    title: "Mon super titre",
    description: "Ma super description"
}, (err, data) => {
    if (err) console.log(err)
    else console.log('CREATE data', data)
})

// Find
Article.find({}, (err, data) => {
    if (err) console.log(err)
    else console.log('FIND data', data)
})

// Find One
Article.findOne({
    title: "Mon super titre"
}, (err, data) => {
    if (err) console.log(err)
    else console.log('FINDBYID data', data)
})

// // Delete
// Article.findByIdAndDelete(id, (err, data) => {
//     if (err) console.log(err)
//     else console.log('FINDBYID data', data)
// })