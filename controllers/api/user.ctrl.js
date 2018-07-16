const User = require('../../models/user');
const crudCtrl = require('./base.ctrl');
const router = require('express').Router();

module.exports = crudCtrl(User);