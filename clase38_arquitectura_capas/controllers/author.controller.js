const { getAuthorService, saveAuthorService } = require('../services/author.services')

const getAuthorController = (req, res) => {
    const authors = getAuthorService()

    res.json(authors)
}

const postSaveAuthorController = (req, res) => {
    const author = req.body
    const dataReturn = saveAuthorService(author)

    res.status(201).json(dataReturn)
}

module.exports = {
    getAuthorController, postSaveAuthorController
}