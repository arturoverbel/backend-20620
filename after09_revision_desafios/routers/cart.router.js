const express = require('express')
const { 
    store,
    business,
    addProductToCart
} = require('../services/services')

const { Router } = express

const routerCart = Router()

routerCart.use(express.json())
routerCart.use(express.urlencoded({extended: true}))

routerCart.post('/', (req, res) => {
    let cart = business.createCart()

    return res.send(cart)
})

routerCart.post('/:id/products', (req, res) => {
    const idCart = req.params.id
    const idProduct = req.body.id

    let results = addProductToCart(idCart, idProduct)

    return res.send(results)
})

routerCart.get('/:id/products', (req, res) => {
    const idCart = req.params.id

    let results = business.getProducts(idCart)

    return res.send(results)
})


module.exports = routerCart