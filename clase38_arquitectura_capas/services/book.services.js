const { getBook, saveBook } = require('../models/book.model.js')

const getBookService = () => {
    return getBook()
}

const saveBookService = (data) => {
    data.keyname = data.name.replace(/ /g, '_').toLowerCase();

    return saveBook(data)
}

module.exports = {
    getBookService, saveBookService
}