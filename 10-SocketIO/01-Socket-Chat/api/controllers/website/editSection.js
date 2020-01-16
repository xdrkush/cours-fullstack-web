/*
 *
 * Controller /api/editWebsite
 ***************************/

const Website = require('../../../db/Website')

// Update Website
module.exports = async(req, res) => {
    const dbWebsite = await Website.findById(req.params.id)
    let query = { _id: req.params.id }
    console.log(req.body)
    Website.findOneAndUpdate(
        query, {
            ...req.body,
            section: {
                title: req.body.titleSection,
                stitle: [req.body.stitleSection1, req.body.stitleSection2, req.body.stitleSection3]
            }
        }, { useFindAndModify: false },
        function(error, post) {
            if (error) {
                console.log(error)
                Website.create({
                        ...req.body,
                        section: {
                            title: req.body.titleSection,
                            stitle: [req.body.stitleSection1, req.body.stitleSection2, req.body.stitleSection3]
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