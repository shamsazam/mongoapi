const router = require('express').Router();

router.get('/', (req, res) => res.send('welcome to mongo api'));
router.use('/api', require('./auth.route'));
router.use('/auth', require('./auth.route'));

module.exports = router;

