const mongoose = require('mongoose')
const { Schema } = mongoose;

const Book = mongoose.model('Book', new Schema({ 
    name: String, 
    pages: Number 
}))

module.exports = Book