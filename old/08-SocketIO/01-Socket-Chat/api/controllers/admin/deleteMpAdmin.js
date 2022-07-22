/*
 *
 * Controller /admin/delMp/:id
 ******************************/

const Mp = require('../../../db/Mp')

// Delete Mp Admin
module.exports = (req, res) => {
    Mp.findByIdAndRemove(
        req.params.id, { useFindAndModify: false },
        function(err) {
            if (!err) {
                console.log('del ok')
                res.redirect('/myaccount')
            } else {
                res.redirect('/admin')
            }
        })
}