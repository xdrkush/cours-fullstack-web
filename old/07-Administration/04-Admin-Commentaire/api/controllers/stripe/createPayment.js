/*
 *
 * Controller /shop/checkout
 *****************************/

const express = require('express')
    , app = express()
    , router = express.Router()
    , Article = require('../../../db/Article')
    , Buy = require('../../../db/Buy')

/*
 *  Keys
 *************/
const keys = require('../../../config/keys')
    , stripe = require('stripe')(keys.stripe.sk)

// Achat token
router.post('/checkout/:id', async (req, res, next) => {
    const sess = req.session
        , dbBuy = await Buy.find({})
        , dbArticle = await Article.findById({ _id: req.params.id })

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 4990,
        currency: 'eur',
        // product: 'prod_GUaA97qUbfNcOS',
        payment_method_types: ['card'],
        statement_descriptor: 'Custom descriptor',
    });

    Buy.create(
        {
            ...req.body,
            name: dbArticle.name,
            price: dbArticle.price,
            taille: dbArticle.taille,
            quantity: 1,
            artID: dbArticle.artID,
            imgArticle: dbArticle.imgArticle,
            message: 'En cours de traitement',
            quantity: 1,
            author: sess.pseudo,
            authorId: sess.userId
            // formatDate: (dateFormat(date, "dd mm yyyy à 1HH:MM:ss"))
        },
        res.redirect('/')
    )
    res.redirect('/')
})

module.exports = router