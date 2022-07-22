/*
 *
 * Controller /api/editModel
 ***************************/

const Article = require('../../../db/Article')

// Update Model
module.exports = async(req, res) => {
    const dbArticle = await Article.findById(req.params.id)
    let query = { _id: req.params.id }
    console.log('test Édition / ' + req.params.id + '\n' + req.body.name + " / " + req.body.email)
    Article.findOneAndUpdate(
        query, {
            name: req.body.name,
            price: req.body.price,
            imgArticle: req.body.imgArticle,
            description: req.body.description,
            isVerified: req.body.isVerified
        }, { useFindAndModify: false },
        function(error, post) {
            if (error) {
                console.log(error)
                Article.create({
                        ...req.body
                    },
                    (error, post) => {
                        console.log('err 1')
                        res.redirect('/')
                    })
            } else {
                console.log('err 2')
                res.redirect('/eshop')
            }
        }
    )
}