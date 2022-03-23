const { getBookService, saveBookService } = require('../services/book.services')

const getBookController = async (req, res) => {
    const datos = await getBookService()

    res.json(datos)
}

const postSaveBookController = async (req, res) => {
    const dato = req.body
    const dataReturn = await saveBookService(dato)

    res.status(201).json(dataReturn)
}

module.exports = {
    getBookController, postSaveBookController
}