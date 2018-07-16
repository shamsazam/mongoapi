const router = require('express').Router();
const controller = require('./base.ctrl');

router.use('/user', require('./user.ctrl'));
router.use('/book', require('./book.ctrl'));
router.use('/post', controller(require('../../models/post')));

module.exports = router;