/*
 *
 * Controller /auth/delUser/:id
 ******************************/

const User = require('../../../db/User')

// Delete User
module.exports = (req, res) => {
    User.findByIdAndRemove(
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