const express = require('express')
// Définition de router afin de pouvvoir l'exporter en fin de page
// router  execute les fonction de chaque page grace à router.get / router.post, ... 
const router = express.Router()

// Page Home racine 
router.get('/', async (req, res, next) => {  
    res.render('home')
})

// Page Contact
router.get('/contact', async (req, res, next) => {
    res.render('contact')
})

// Page À Propos
router.get('/about', async (req, res, next) => {
    res.render('apropos')
})

// Page À Projet
router.get('/projet', async (req, res, next) => {
    res.render('projet')
})

// Page À Projet
router.get('/admin', async (req, res, next) => {
    res.render('admin', {layout: 'admin'});
})

module.exports = router