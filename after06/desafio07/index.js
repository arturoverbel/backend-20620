const express = require('express')
const { Router } = require('express')
const router = Router()
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const Container = require('./methods.js')
const DB = new Container('articulos')

const app = express()

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const messages = []

app.use(express.static('./public'))

DB.init()
app.get('/',(req,res) => {
    res.sendFile('index.html', {root: __dirname})
})

router.use(express.json())
router.use(express.urlencoded({
    extended: true
}))

router.get('/', async (req,res) =>{
    const elements = await DB.getAll()
    console.log(elements)
    res.send(JSON.stringify(elements))
})

router.post('/', async (req,res) =>{
    console.log(req.body)
    const result = await DB.save(req.body)
    res.send(JSON.stringify(result))
})

router.delete('/:id', async (req,res) =>{
    console.log(req.body)
    const result = await DB.deleteById(req.params.id)
    res.send(JSON.stringify(result))
})




io.on('connection', (socket) =>{
    console.log('usuario conectado')
    socket.on('new_product',async (data)=>{
        await file.save(data)
        io.sockets.emit('products', data)
    })
})

io.on('connection', (socket)=>{
    socket.emit('messages', messages)
    socket.on('new_message', data =>{
        data.time = new Date().toLocaleTimeString()
        data.date = new Date().toLocaleDateString()
        messages.push(data)
        io.sockets.emit('messages', [data])
    })

})


app.use('/api/productos', router)

httpServer.listen( process.env.PORT ||3000, () => console.log('server on'))