const jwt = require('jsonwebtoken');
const config = require('./config');

const createToken = user => {
    const token = jwt.sign({ user: user.id }, config.JWT_SECRET);
    return { user: user.firstname+" "+user.lastname, token: token };
};

module.exports = createToken;