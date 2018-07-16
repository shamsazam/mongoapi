const authRepo = require('../repository/auth.repo');
const router = require('express').Router();

router.post('/signup', async(req, res) => {
    let result = await authRepo.signup({});
    res.send('signup '+result);
});

router.post('/login', async(req, res) => {
    let result = await authRepo.login({});
    res.send('login');
});

module.exports = router;
