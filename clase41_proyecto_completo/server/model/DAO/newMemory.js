import createNewDTO from '../DTO/news.js'
import NewBaseDAO from './baseDAO.js'

class NewMemoryDAO extends NewBaseDAO {

    constructor() {
        super()
        this.news = []
    }

    getNews = async _id => {
        try {
            if(_id) {
                let index = this.news.findIndex(n => n._id == _id)

                return index >= 0 ? [this.news[index]] : []
            } else {

                return this.news
            }
        } catch (e) {
            console.log('Error to get news', e)
            return []
        }
    }

    insertNew = async (newToInsert) => { 
        try {
            const _id = this.getNextID(this.news)
            const datetime = new Date().toLocaleString()
            const newDTO = createNewDTO(newToInsert, _id, datetime) 

            this.news.push(newDTO)
        } catch (e) {
            console.log('Error to insert new', e)
            return {}
        } 
    }
    updateNew = async (_id, newToUpdate) => { 
        try {
            const datetime = new Date().toLocaleString()
            const newDTO = createNewDTO(newToUpdate, _id, datetime)

            const index = this.getIndex(_id, this.news)
            const newCurrent = this.news[index] || {}

            const newUpdated = {...newCurrent, ...newDTO}
            
            if(index >= 0) {
                this.news.splice(index, 1, newUpdated)
            } else {
                this.news.push(newUpdated)
            }

            return newUpdated
        } catch (e) {
            console.log('Error to update new', e)
            return {}
        } 
    }
    deteleNew = async (_id) => { 
        try {
            const index = this.getIndex(_id, this.news)
            const newDeleted = this.news.splice(index, 1)[0]

            return newDeleted
        } catch (error) {
            console.log('Error to delete new', e)
            return {}
        }
    }
    
}

export default NewMemoryDAO