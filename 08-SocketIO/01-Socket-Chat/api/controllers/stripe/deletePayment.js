/*
 *
 * Controller /api/del/:id
 *************************/

const Buy = require('../../../db/Buy')

// Delete Model
module.exports = (req, res) => {
    Buy.findByIdAndRemove(
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