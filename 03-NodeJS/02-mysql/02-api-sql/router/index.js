const express = require('express');
const router = express.Router();
const db = require('../config/db').db;

router.route('/articles')
    .get((req, res) => {
        db.query('SELECT * FROM articles', (err, data) => {
            if (err) console.log(err)
            else {
                res.json(data)
            }
        })
    })
    .post((req, res) => {
        const { title, price } = req.body;
        db.query(`INSERT INTO articles (title, price) values ("${title}", "${price}")`, (err, data) => {
            if (err) console.log(err)
            else {
                res.json(data)
            }
        })
    })
    .delete((req, res) => {
        db.query("DELETE FROM articles", (err, data) => {
            if (err) console.log(err)
            else {
                res.json(data)
            }
        })
    })

router.route('/article/:id')
    .get((req, res) => {
        db.query(`SELECT * FROM articles WHERE id = ${req.params.id}`, (err, data) => {
            if (err) console.log(err)
            else {
                res.json(data)
            }
        })
    })
    .put((req, res) => {
        const { title, price } = req.body;
        db.query(`UPDATE articles 
                    SET title = '${title}', price = '${price}'
                    WHERE id = ${req.params.id}`, (err, data) => {
            if (err) console.log(err)
            else {
                res.json(data)
            }
        })
    })
    .delete((req, res) => {
        db.query(`DELETE FROM articles WHERE id = ${req.params.id}`, (err, data) => {
            if (err) console.log(err)
            else {
                res.json(data)
            }
        })
    })

module.exports = router