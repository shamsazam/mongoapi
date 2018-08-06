const router = require('express').Router();
const Book = require('../../models/book');
const baseRouter = require('./crud.route');
const logger = require('../../utils/logger');

router.get('/about', (req, res) => {
    logger.info("gettting about data for books ");
    res.send("get books data from /api/book endpoint");
});

router.get('/config', (req, res) => {
    res.json({ id: 1, message: "configuration details"});
});

module.exports = baseRouter(Book, router);