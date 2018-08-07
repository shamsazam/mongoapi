const bcrypt = require('bcryptjs');
const User = require('../models/user');
const createToken = require('../utils/authToken');
const logger = require('../utils/logger');

const signup = async (user) => {
    const existingUser = await User.findOne({ email: user.email });
    if(existingUser)
        throw new Error("a user already exist with this email");
    else {
        user.password = bcrypt.hashSync(user.password, 12);
        const newUser = await User.create(user);
        logger.info("successfully signed up with email "+newUser.email);
        return createToken(newUser);
    }
};

const login = async ({ email, password }) => {
    const user = await User.findOne({ email }).select("+password");
    if(user){
        let success = bcrypt.compareSync(password, user.password);
        if(success){
            logger.info("succesfully logged in with email "+email);
            return createToken(user);
        }
        else
            throw new Error("password is wrong");
    } 
    else
        throw new Error(`user with email ${email} doesnot exist`);
};

module.exports = { signup, login };