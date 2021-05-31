/*
 *
 * Controller /api/del/:id
 *************************/

const Article = require('../../../db/Article')

// Delete Model
module.exports = (req, res) => {
    Article.findByIdAndRemove(
        req.params.id, { useFindAndModify: false },
        function(err) {
            if (!err) {
                console.log('del ok')
                res.redirect('/eshop')
            } else {
                res.redirect('/')
            }
        })
}