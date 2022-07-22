/*
 *
 * Controller /api/del/:id
 *************************/

const Model = require('../../../db/Model')

// Delete Model
module.exports = (req, res) => {
    Model.findByIdAndRemove(
        req.params.id, { useFindAndModify: false },
        function(err) {
            if (!err) {
                console.log('del ok')
            } else {
                res.redirect('/')
            }
        })
    res.redirect('/')
}