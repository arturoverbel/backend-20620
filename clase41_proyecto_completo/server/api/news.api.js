import config from '../config/config.js'
import NewsFactoryDAO from '../model/DAO/newFactory.js'
import News from '../model/models/news.js'

class NewsApi {

    constructor() {
        this.newDAO = NewsFactoryDAO.get(config.TYPE_DB)
    }

    async getNew(id) {

        return await this.newDAO.getNews(id)
    }
    
    async insertNew(newToInsert) {
        NewsApi.validateNew(newToInsert)
        return await this.newDAO.insertNew(newToInsert)
    }
    async updateNew(id, newToUpdate) {
        NewsApi.validateNew(newToUpdate)
        return await this.newDAO.updateNew(id, newToUpdate)
    }
    async deleteNew(id) {
        return await this.newDAO.deteleNew(id)
    }

    static validateNew(newToValidate, require) {
        try {
            News.validate(newToValidate, require)
        } catch (e) {
            throw new Error('New is invalid')
        }
    }

}
export default NewsApi