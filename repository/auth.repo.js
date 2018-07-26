const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../utils/config');

const signup = async ({firstname, lastname, email, password}) => {
    const existingUser = await User.findOne({ where: { email }});
    if(existingUser)
        throw new Error("a user already exist with this email");
    else {
        let user = new User({firstname, lastname, email, password});
        let token = jwt.sign({user: "user"}, config.JWT_SECRET);
        return token;
    }
};

const login = async ({ email, password }) => {
    
};

module.exports = { signup, login };