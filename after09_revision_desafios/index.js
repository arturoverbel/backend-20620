const express = require('express')
const routerProducts = require('./routers/product.router')
const routerCarts = require('./routers/cart.router')

const app = express()
const PORT = 8080



app.use('/api/product', routerProducts)
app.use('/api/cart', routerCarts)




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})