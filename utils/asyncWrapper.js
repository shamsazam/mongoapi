const logger = require('./logger');

const errorHandler = (error, response) => {
    if(error){
        logger.error(error.message);
        response.status(500).send(error.message);
    }
}

const wrapper = fn =>(req, res) => Promise.resolve(fn(req,res)).catch(e => errorHandler(e, res));

module.exports = wrapper;