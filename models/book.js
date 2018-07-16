const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    isbn: String,
    title: String,
    author: String,
    Year: String
});

module.exports = mongoose.model('Book', bookSchema);