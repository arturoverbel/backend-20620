const express = require('express')
const { Router } = express

const app = express();

// ROUTER
const router = Router()

router.get('/usuario', (req, res) => {
    console.log(__dirname)
    res.send("Devuelve usuarios")
})

router.get('/producto', (req, res) => {
    res.send("Devuelve productos")
})

app.use('/ezequiel', router)

app.get('/sin-api', (req, res) => {
    res.send("Sin prefix api")
})


// STATICS FILES
app.use('/static', express.static(__dirname + '/public'))
app.use(express.static('datas'))


app.listen(3000)