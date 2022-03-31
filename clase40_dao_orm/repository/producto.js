module.exports = class Producto {

    #id
    #name
    #price
    #stock

    constructor({ id, name, price, stock = 4}) {
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
    }

    // getter and setter
    get id() { return this.#id }
    set id(id) {
        if(!id) throw new Error('id invalid')
        this.#id = id
    }

    get name() { return this.#name }
    set name(name) {
        if(!name) throw new Error('name invalid')
        this.#name = name
    }

    get price() { return this.#price }
    set price(price) {
        if(!price || isNaN(price) || price < 0) throw new Error('price invalid')
        this.#price = price
    }

    get stock() { return this.#stock }
    set stock(stock) {
        if(!stock || isNaN(stock) || stock < 0) throw new Error('stock invalid')
        this.#stock = stock
    }

}