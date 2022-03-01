const express = require('express')
const compression = require('compression')

const app = express()
app.use(compression())

app.get('/', (req, res) => {

    res.send('Saludos a los studiantes, They    rocks!!'.repeat(30000))
})

app.listen(3000)