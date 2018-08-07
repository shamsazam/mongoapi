const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const config = require('../utils/config');

const signup = async (user) => {
    console.log('user :', user);
    const existingUser = await User.findOne({ email: user.email });
    if(existingUser)
        throw new Error("a user already exist with this email");
    else {
        user.password = bcrypt.hashSync(user.password, 12);
        let newUser = new User(user);
        let result = await newUser.save();
        console.log('result :', result);
        let token = jwt.sign({user: result.id}, config.JWT_SECRET);
        return { user: result.id, token: token };
    }
};

const login = async ({ email, password }) => {
    const user = await User.findOne({ email }).select("+password");
    if(user){
        let success = bcrypt.compareSync(password, user.password);
        if(success){
            let token = jwt.sign({user: user.id}, config.JWT_SECRET);
            return { user: user.firstname, token: token };
        }
        else
            throw new Error("wrong password");
    }else {
        throw new Error("user with this email doesnot exist");
    }
};

module.exports = { signup, login };