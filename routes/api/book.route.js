const router = require('express').Router();
const Book = require('../../models/book');
const baseRouter = require('./crud.route');

router.get('/about', (req, res) => {
    res.send("get books data from /api/book endpoint");
});

router.get('/config', (req, res) => {
    res.json({ id: 1, message: "configuration details"});
});

module.exports = baseRouter(Book, router);