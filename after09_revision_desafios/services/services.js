const StoreRepo = require('../repository/store')
const { BussincessRepo, CartRepo } = require('../repository/cart')

const store = new StoreRepo()
const business = new BussincessRepo()

function addProductToCart(idCart, idProduct) {
    let product = store.getProduct(idProduct)
    let result = business.insertProduct(idCart, product)

    return result
}

module.exports = {
    store,
    business,
    addProductToCart
}
