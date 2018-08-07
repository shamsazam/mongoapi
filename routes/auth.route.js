const authRepo = require('../repository/auth.repo');
const wrap = require('../utils/asyncWrapper');
const router = require('express').Router();

router.post('/signup', wrap(async(req, res) => {
    let result = await authRepo.signup(req.body);
    res.json(result);
}));

router.post('/login', wrap(async(req, res) => {
    let result = await authRepo.login(req.body);
    res.json(result);
}));

module.exports = router;
