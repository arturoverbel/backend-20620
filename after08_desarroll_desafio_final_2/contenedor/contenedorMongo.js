const mongoose = require('mongoose')

class ContenedorMongo {

    constructor(url, collection, schema) {
        this.URL = url;
        this.schema = mongoose.model(collection, schema)
    }

    async connect() {
        const rta = await mongoose.connect(this.URL)
    }

    async getAll() {
        try {
            return await this.schema.find()
        } catch (error) {
            console.log(error)

            return []
        }
    }

    async save(obj) {

        try {
            const obj = new this.schema(obj)
            const r = await obj.save()

            return r
        } catch (error) {
            throw new Error(`Error on saving: ${error}`)
        }
    }

}


module.exports = ContenedorMongo