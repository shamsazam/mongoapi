const User = require('../../models/user');
const crudCtrl = require('./crud.route');
const router = require('express').Router();

module.exports = crudCtrl(User);