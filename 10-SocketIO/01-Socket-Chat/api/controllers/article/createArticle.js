/*
 *
 * Controller /api/createModel
 *****************************/

const Article = require('../../../db/Article')

// Create Model
module.exports = async(req, res, next) => {
    Article.create({
            ...req.body
        },
        res.redirect('/eshop')
    )
}