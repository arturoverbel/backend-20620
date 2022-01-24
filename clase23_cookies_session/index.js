const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.get('/set', (req, res)=> {
    res.cookie('server', 'cliver').send('Cookie set')
})

app.get('/setX', (req, res)=> {
    res.cookie('server2', 'Carlos Ruiz', { maxAge: 20000}).send('Cookie set X')
})

app.get('/get', (req, res)=> {
    res.send(req.cookies.server)
})

app.get('/set-title/:title', (req, res) => {
    let title = req.params.title
    res.cookie('title', title).send('Set title')
})

app.get('/set-color/:color', (req, res) => {
    let color = req.params.color
    res.cookie('color', color).send('Set color')
})

app.get('/saludo/:name', (req, res) => {
    let title = req.cookies.title
    let color = req.cookies.color || 'blue'
    let name = req.params.name
    res.send(`<div style="color: ${color};">Hola ${title} ${name}</div>`)
})

app.get('/clr', (req, res) => {
    res.clearCookie('server2').send('Cookie clear')
})

app.listen(3000, () => {
    console.log("Listening 3000...")
})