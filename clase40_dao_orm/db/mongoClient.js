const DBClient = require('./dbClient')
const mongoose = require('mongoose')
const Config = require('../config/config')

class MongoClient extends DBClient {

    constructor() {
        super()
        this.connected = false
        this.client = mongoose
    }

    async connect() {
        try {
            const url = Config.db.connectString + Config.db.name
            await this.client.connect(url)

            this.connected = true
            console.log('DB mongo connected!')
        } catch (error) {
            throw new Error('error to connect to Mongo' + error)
        }
    }

    async disconnect() {
        try {
            await this.client.connection.close()

            this.connected = false
            console.log('DB mongo disconnected!')
        } catch (error) {
            throw new Error('error to disconnect to Mongo' + error)
        }
    }

    async add(product) {
        try {
            const Product = mongoose.model('Product', { name: String, price: Number });
            const p = new Product(product)

            return await p.save()
        } catch (error) {
            throw new Error('error to connect to Mongo' + error)
        }
    }

    async get() {
        try {
            const Product = mongoose.model('Product', { name: String, price: Number });
            
            return await Product.find()
        } catch (error) {
            throw new Error('error to connect to Mongo' + error)
        }
    }

}

module.exports = MongoClient