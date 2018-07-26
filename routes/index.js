const router = require('express').Router();
const apiRouter = require('./api');

router.get('/', (req, res) => res.send('welcome to mongo api'));
router.use('/api', apiRouter);
router.use('/auth', require('./auth.route'));

module.exports = router;

