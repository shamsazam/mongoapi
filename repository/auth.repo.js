const bcrypt = require('bcryptjs');
const User = require('../models/user');
const createToken = require('../utils/authToken');

const signup = async (user) => {
    const existingUser = await User.findOne({ email: user.email });
    if(existingUser)
        throw new Error("a user already exist with this email");
    else {
        user.password = bcrypt.hashSync(user.password, 12);
        let newUser = new User(user);
        let result = await newUser.save();
        return createToken(result);
    }
};

const login = async ({ email, password }) => {
    const user = await User.findOne({ email }).select("+password");
    if(user){
        let success = bcrypt.compareSync(password, user.password);
        if(success){
            return createToken(user);
        }
        else
            throw new Error("wrong password");
    }else {
        throw new Error("user with this email doesnot exist");
    }
};

module.exports = { signup, login };