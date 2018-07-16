const mongoose = require('mongoose');
const config = require('./config.js');

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to mongo db');
});