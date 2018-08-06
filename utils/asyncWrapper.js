
const errorHandler = (error, response) => {
    if(error){
        console.log('error.message :', error.message);
        response.status(500).send(error.message);
    }
}

const wrapper = fn =>(req, res) => Promise.resolve(fn(req,res)).catch(e => errorHandler(e, res));

module.exports = wrapper;