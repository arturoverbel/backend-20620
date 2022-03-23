const { getBookService, saveBookService } = require('../services/book.services')

const getBookController = (req, res) => {
    const datos = getBookService()

    res.json(datos)
}

const postSaveBookController = (req, res) => {
    const dato = req.body
    const dataReturn = saveBookService(dato)

    res.status(201).json(dataReturn)
}

module.exports = {
    getBookController, postSaveBookController
}