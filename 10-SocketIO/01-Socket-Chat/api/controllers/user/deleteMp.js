/*
 *
 * Controller /api/del/:id
 *************************/

const Mp = require('../../../db/Mp')

// Delete Model
module.exports = (req, res) => {
    Mp.findByIdAndRemove(
        req.params.id, { useFindAndModify: false },
        function(err) {
            if (!err) {
                console.log('del ok')
                res.redirect('/myaccount')
            } else {
                res.redirect('/')
            }
        })
}