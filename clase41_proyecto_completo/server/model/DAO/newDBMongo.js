import mongodb from 'mongodb'
import createNewDTO from '../DTO/news.js'
import NewBaseDAO from './baseDAO.js'

const { MongoClient, ObjectId } = mongodb

class NewDBMongoDAO extends NewBaseDAO {

    constructor(database, collection) {
        super()
        ( async () => {
            console.log('Connecting mongo DB ...')

            const connection = await MongoClient.connect(`mongodb://127.0.0.1`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })

            const db = connection.db(database)
            this._collection = db.collection(collection)
        })()
    }

    getNews = async _id => {
        try {
            if(_id) {
                console.log('Search ',_id)
                const newOne = await this._collection.findOne({
                    _id: ObjectId(_id)
                })
                console.log(newOne)

                return [newOne]
            } else {
                const news = await this._collection.findOne({}).toArray()

                return news
            }
        } catch (e) {
            console.log('Error to get news', e)
            return []
        }
    }

    insertNew = async (newToInsert) => { 
        try {
            await this._collection.insertOne(newToInsert)

            return newToInsert
        } catch (e) {
            console.log('Error to insert new', e)
            return newToInsert
        } 
    }

}

export default NewDBMongoDAO