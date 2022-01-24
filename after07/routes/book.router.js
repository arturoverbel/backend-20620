const express = require('express')
const { Router } = express

const BookController = require("../controllers/book.controller")

const routerBook = Router()

routerBook.get('/', BookController.getBooks)
routerBook.post('/', BookController.insertBook)
routerBook.put('/:id', BookController.updateBook)
routerBook.delete('/:id', BookController.deleteBook)

module.exports = routerBook