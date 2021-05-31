/*
 *
 * Pages /eshop
 *************/

const Article = require('../../../db/Article'),
    User = require('../../../db/User'),
    Buy = require('../../../db/Buy')

// Page Index racine 
module.exports = async(req, res) => {
    const dbArticle = await Article.find({})
    const dbUser = await User.find({})
    const dbBuy = await Buy.find({})
    const sess = req.session
    res.render('eshop', {
        dbArticle,
        dbUser,
        dbBuy,
        sess
    })
}