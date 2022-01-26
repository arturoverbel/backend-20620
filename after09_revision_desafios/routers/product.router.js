const express = require('express')
const { store } = require('../services/services')
const { config } = require('../config/config')

const { Router } = express


const routerProducts = Router()

routerProducts.use(express.json())
routerProducts.use(express.urlencoded({extended: true}))

routerProducts.get('/:id?', (req, res) => {
    if (config.adminProducts && !req.headers.admin) {
        return res.status(401).send("No auth")
    }
    
    const id = req.params.id || null

    let results = store.getProduct(id) || {}

    return res.send(results)

})

routerProducts.post('/', (req, res) => {
    const product = req.body
    console.log(product)
    store.addProduct(product)

    return res.send(product)
})

module.exports = routerProducts