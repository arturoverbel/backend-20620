const { Router } = require('express')
const { getAuthorController, postSaveAuthorController } = require('../controllers/author.controller')

const authorRouter = new Router()

authorRouter.get('/', getAuthorController)
authorRouter.post('/', postSaveAuthorController)

module.exports = { authorRouter }