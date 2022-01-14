const mongoose = require('mongoose')
const ContenedorMongo = require("../contenedor/contenedorMongo")
const config = require('../config.js')

class StudentMongo extends ContenedorMongo {
    constructor() {
        super(`${config.mongo.url}`, "student", new mongoose.Schema({
            name: {type: String, require: true, max: 100},
            age: Number
        }))

        super.connect()
    }

    async getAll() {
        return super.getAll()
    }

    async save(obj) {
        return super.save(obj)
    }

}

module.exports = StudentMongo