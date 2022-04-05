import express from 'express'
const router = express.Router()

import NewsController from '../controller/news.controller.js'

class RouterNews {

    constructor() {
        this.newsController = new NewsController()
    }

    start() {
        router.get('/:id?', this.newsController.getNews)
        router.post('/', this.newsController.insertNew)
        router.put('/:id', this.newsController.updateNew)
        router.delete('/:id', this.newsController.deleteNew)

        return router
    }

}

export default RouterNews