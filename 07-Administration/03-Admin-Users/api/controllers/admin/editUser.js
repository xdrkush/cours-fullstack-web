/*
 *
 * Controller /api/editModel
 ***************************/

const express = require('express')
    , app = express()
    , router = express.Router()
    , User = require('../../../db/User')

// Update Model
router.post('/editUser/:id', async (req, res) => {
    const dbUser = await User.findById(req.params.id)
    let query = { _id: req.params.id }
    console.log('test Édition / ' + req.params.id + '\n' + req.body.name + " / " + req.body.email)
    User.findOneAndUpdate(
        query,
        {
            isAdmin: req.body.isAdmin,
            isModo: req.body.isModo,
            isBan: req.body.isBan,
            status: req.body.status
        },
        { useFindAndModify: false },
        function (error, post) {
            if (error) {
                console.log(error)
                User.create({
                    ...req.body
                }, (error, post) => {
                    console.log('err 1')
                    res.redirect('/')
                })
            } else {
                console.log('err 2')
                res.redirect('/admin')
            }
        }
    )
})

module.exports = router