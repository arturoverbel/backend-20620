const express = require('express')
const { productRouter } = require('./src/routes/products.routes')

const app = express()
app.use(express.json())

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.send('hiii') )
app.use('/products', productRouter)

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Server running ${PORT} ...`)
})
server.on('error', e => console.error(`SERVER ERROR: `, e))


