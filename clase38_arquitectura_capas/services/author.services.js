const { getAuthor, saveAuthor } = require('../models/author.model')

const getAuthorService = () => {
    return getAuthor()
}

const saveAuthorService = (author) => {
    return saveAuthor(author)
}

module.exports = {
    getAuthorService, saveAuthorService
}