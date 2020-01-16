/*
 *
 * Controller /api/editWebsite
 ***************************/

const Website = require('../../../db/Website')

// Update Website
module.exports = async(req, res) => {
    const dbWebsite = await Website.findById(req.params.id)
    let query = { _id: req.params.id }
    console.log('test Édition / ' + req.params.id + '\n' + req.body.name + " / " + req.body.email)
    Website.findOneAndUpdate(
        query, {
            ...req.body,
            header: {
                title: req.body.title,
                stitle: [req.body.stitle1, req.body.stitle2, req.body.stitle3]
            }
        }, { useFindAndModify: false },
        function(error, post) {
            if (error) {
                console.log(error)
                Website.create({
                        ...req.body,
                        header: {
                            title: req.body.title,
                            stitle: [req.body.stitle1, req.body.stitle2, req.body.stitle3]
                        }
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
}