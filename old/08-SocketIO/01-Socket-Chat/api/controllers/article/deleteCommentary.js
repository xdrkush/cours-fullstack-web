/*
 *
 * Controller /api/del/:id
 *************************/

const Commentary = require('../../../db/Commentary')

// Delete Model
module.exports = (req, res) => {
    Commentary.findByIdAndRemove(
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