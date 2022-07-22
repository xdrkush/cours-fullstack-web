/*
 *
 * Pages /article/:id
 **************************/

const Article = require('../../../db/Article'),
    User = require('../../../db/User'),
    Commentary = require('../../../db/Commentary')

// Middleware
// const isAdmin = require('../../../middleware/isAdmin')

// Page Index racine 
module.exports = async(req, res) => {
    const dbArticle = await Article.findById({ _id: req.params.id })
    const dbUser = await User.find({})
    const dbCommentary = await Commentary.find({ articleID: req.params.id })
    const sess = req.session
        // console.log(dbArticle);
    res.render('articleID', {
        dbArticle,
        dbUser,
        dbCommentary,
        sess
    })
}