const { Router } = require('express')
const { getBookController, postSaveBookController } = require('../controllers/book.controller.js')

const bookRouter = new Router()

bookRouter.get('/', getBookController)
bookRouter.post('/', postSaveBookController)

module.exports = { bookRouter }