const User = require('../../models/user');
const crudRouter = require('./crud.route');
const router = require('express').Router();

router.put('/', (req, res, next) => {
    if('password' in req.body){
        logger.info('removing password field');
        delete req.body["password"];
    }
    next();
});

module.exports = crudRouter(User, router);