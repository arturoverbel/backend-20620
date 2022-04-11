const { Router } = require('express')
const mongodb = require('mongodb' )
const { MongoClient, ObjectId } = mongodb

const router = new Router()
const database = 'coderhouse'
const collectionName = 'users2'

router.post('/', async (req, res) => {
    const user = req.body

    try {
        const connection = await MongoClient.connect(`mongodb://127.0.0.1`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const db = connection.db(database)
        const collection = db.collection(collectionName)
        
        
        await collection.insertOne(user)

        res.json(user)
    } catch (e) {
        console.log('Error to insert user', e)
        res.json(user)
    }
})

router.get('/:id?', async (req, res) => {
    try {
        const connection = await MongoClient.connect(`mongodb://127.0.0.1`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const db = connection.db(database)
        const collection = await db.collection(collectionName)
        const id = req.params.id

        if(id) {
            console.log('Search ', id)
            const user = await collection.findOne({_id: ObjectId(id)})
            console.log(user)

            res.json([user])
        } else {
            const userss = await collection.find({}).toArray()
            console.log(userss)

            res.json(userss)
        }

    } catch (e) {
        console.log('Error to get users', e)
        res.json([])
    }
})

class RouterUsers {
    constructor() {
        return router
    }
}

module.exports = RouterUsers