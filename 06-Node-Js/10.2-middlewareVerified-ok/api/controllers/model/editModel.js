const express = require('express')
    , app = express()
    , router = express.Router()
    , Model = require('../../../db/Model')

// Update Model
router.post('/editModel/:id', async (req, res) => {
    const dbModel = await Model.findById(req.params.id)
    let query = { _id: req.params.id }
    console.log('test Édition / ' + req.params.id + '\n' + req.body.name + " / " + req.body.email)
    Model.findOneAndUpdate(
        query,
        {
            name: req.body.name,
            email: req.body.email
        },
        { useFindAndModify: false },
        function (error, post) {
            if (error) {
                console.log(error)
                Model.create({
                    ...req.body
                },
                    (error, post) => {
                        console.log('err 1')
                        res.redirect('/')
                    })
            } else {
                console.log('err 2')
                res.redirect('/')
            }
        }
    )
})

module.exports = router