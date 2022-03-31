const ProductDao = require('../dao/productosDao')

class ProductApi {

    constructor() {
        this.productDao = new ProductDao()
    }

    async add(product) {
        return await this.productDao.add(product)
    }

    async get() {
        return await this.productDao.getAll()
    }

    async exit() {
        return await this.productDao.exit()
    }
}

module.exports = ProductApi