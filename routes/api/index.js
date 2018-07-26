const router = require('express').Router();
const crudRouter = require('./crud.route');

router.use('/user', require('./user.route'));
router.use('/book', require('./book.route'));
router.use('/post', crudRouter(require('../../models/post')));

module.exports = router;