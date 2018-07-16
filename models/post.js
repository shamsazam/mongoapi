const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    body: String,
    date: Date,
});

module.exports = mongoose.model('Post', postSchema);