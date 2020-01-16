/*
 *
 * Controller /api/createModel
 *****************************/
const Model = require('../../../db/Model')

// Create Model
module.exports = async(req, res, next) => {
    Model.create({
            ...req.body
        },
        res.redirect('/')
    )
}