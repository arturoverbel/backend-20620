const { getBook, saveBook } = require('../models/book.model.js')

const getBookService = async () => {
    return await getBook()
}

const saveBookService = async (data) => {
    data.keyname = data.name.replace(/ /g, '_').toLowerCase();

    return await saveBook(data)
}

module.exports = {
    getBookService, saveBookService
}