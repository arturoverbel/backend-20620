const express = require('express')

const app = express()
app.use(express.json())

app.listen(3000) // 80

let frase = "Frase inicial";

app.get('/', (req, res) => {
    console.log("GET request")

    res.send("Saludos a todos en After !!")
})

app.get('/api/frase', (req, res) => {
    res.json({ frase })
})

app.get('/api/palabras/:pos', (req, res) => {
    let palabras = frase.split(" ")
    let index = parseInt(req.params.pos) - 1

    res.json({ 
        'buscada': palabras[index]
     })
})

app.post('/api/palabras', (req, res) => {
    let palabra =req.body.palabra
    frase += ` ${palabra}`

    res.json({ 
        'agregada': palabra,
        'pos': frase.split(" ").length
     })
})

app.put('/api/palabras/:pos', (req, res) => {
    let palabra =req.body.palabra
    let palabras = frase.split(" ")
    let index = parseInt(req.params.pos) - 1

    let palabraAnterior = palabras[index]
    palabras[index] = palabra

    frase = palabras.join(" ")

    res.json({ 
        'actualizada': palabra,
        'anterior': palabraAnterior
     })
})

app.delete('/api/palabras/:pos', (req, res) => {
    let index = parseInt(req.params.pos) - 1
    let palabras = frase.split(" ")

    palabras.splice(index, 1)
    frase = palabras.join(" ")

    res.json({ 
        'eliminado': true,
     })
})