import ApiNews from '../api/news.api.js'

class NewsController {
    constructor() {
        this.apiNews = new ApiNews()
    }

    getNews = async (req, res) => {
        try {
            const id = req.params.id
            const news = await this.apiNews.getNew(id)

            res.json(news)
        } catch (e) {
            console.log(`error to get news `, e)
        }
    }
    insertNew = async (req, res) => {
        try {
            const newToSave = req.body
            const newSaved = await this.apiNews.insertNew(newToSave)

            res.json(newSaved)
        } catch (e) {
            console.log(`error to insert new `, e)
        }
    }
    updateNew = async (req, res) => {
        try {
            const id = req.params.id
            const newToUpdate = req.body

            const newUpdated = await this.apiNews.updateNew(id, newToUpdate)
            res.json(newUpdated)
        } catch (e) {
            console.log(`error to update new `, e)
        }
    }
    deleteNew = async (req, res) => {
        try {
            const id = req.params.id
            const newDeleted = await this.apiNews.deleteNew(id)

            res.json(newDeleted)
        } catch (e) {
            console.log(`error to delete new `, e)
        }
    }
}

export default NewsController