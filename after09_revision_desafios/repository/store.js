
class StoreRepo {

    constructor() {
        this.almacen = []
        this.counter_id = 0
    }

    addProduct(product) {
        this.counter_id++

        product.id = this.counter_id
        product.timestamp = Date.now()

        this.almacen.push(product)

        return true
    }

    deleteProduct(id) {
        this.almacen = this.almacen.filter(p => p.id != id)

        return true
    }

    getProduct(id) {
        return (id) ? this.almacen.find(p => p.id == id) : this.almacen
    }

}

module.exports = StoreRepo