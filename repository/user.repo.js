const User = require('../models/user');
const repo = require('./base.repo');

let userRepo = repo(User);
userRepo.list = async () => {
    console.log('getting data using new method');
    return await User.find();
};

module.exports = userRepo;

