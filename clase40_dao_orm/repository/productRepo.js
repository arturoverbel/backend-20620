const ProductDao = require('../dao/productosDao')
const Producto = require('./producto')

module.exports = class ProductRepo {
    constructor() {
        this.dao = new ProductDao()
    }

    async getAll() {
        const dtos = this.dao.getAll()
        return dtos.map(dto => new Producto(dto))
    }

    async add(product) {
        return await this.dao.add(product)
    }

}