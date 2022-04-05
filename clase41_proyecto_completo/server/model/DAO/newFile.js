import fs from 'fs'
import createNewDTO from '../DTO/news.js'
import NewBaseDAO from './baseDAO.js'

class NewFileDAO extends NewBaseDAO {

    constructor(filename) {
        super()
        this.filename = filename
    }

    async read()  {

        return JSON.parse(await fs.promises.readFile(this.filename, 'utf-8'))
    }

    async save(news) {
        await fs.promises.writeFile(this.filename, JSON.stringify(news, null, '\t'))
    }

    getNews = async _id => {
        try {
            if(_id) {
                const news = await this.read()
                let index = news.findIndex(n => n._id == _id)
                
                return index >= 0 ? [news[index]] : []
            } else {
                const news = await this.read()

                return news
            }
        } catch (e) {
            console.log('Error to get news', e)
            return []
        }
    }

    insertNew = async (newToInsert) => { 
        try {
            const news = await this.read()

            const _id = this.getNextID(news)
            const datetime = new Date().toLocaleString()
            const newDTO = createNewDTO(newToInsert, _id, datetime) 

            news.push(newDTO)

            await this.save(news)
        } catch (e) {
            console.log('Error to insert new', e)
            return {}
        } 
    }
    updateNew = async (_id, newToUpdate) => { 
        try {
            const news = await this.read()

            const datetime = new Date().toLocaleString()
            const newDTO = createNewDTO(newToUpdate, _id, datetime)

            const index = this.getIndex(_id, news)
            const newCurrent = news[index] || {}

            const newUpdated = {...newCurrent, ...newDTO}
            
            if(index >= 0) {
                news.splice(index, 1, newUpdated)
            } else {
                news.push(newUpdated)
            }

            await this.save(news)

            return newUpdated
        } catch (e) {
            console.log('Error to update new', e)
            return {}
        } 
    }
    deteleNew = async (_id) => { 
        try {
            const news = await this.read()
            const index = this.getIndex(_id, news)
            const newDeleted = news.splice(index, 1)[0]

            await this.save(news)

            return newDeleted
        } catch (error) {
            console.log('Error to delete new', e)
            return {}
        }
    }
    
}

export default NewFileDAO