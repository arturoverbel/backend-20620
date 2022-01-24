const express = require('express')

const app = express()
app.listen(process.env.PORT || 3000)

const frase = "Colombia clasificó al mundial buajajaja";

app.get('/api/frase', (req, res) => {
    res.json({ frase })

})

app.get('/api/letras/:num', (req, res) => {
    let num = parseInt(req.params.num);

    if(isNaN(num)) {
        return res.send({ error: "El parámetro no es un num" })
    }

    if(num > frase.length || num <= 0) {
        return res.send({error: "Fuera de rango"})
    }

    return res.json({ letra: frase[num - 1] })
})

app.get('/api/palabras/:num', (req, res) => {
    let palabras = frase.split(' ')
    let num = parseInt(req.params.num);

    if(isNaN(num)) {
        return res.send({ error: "El parámetro no es un num" })
    }

    if(num > palabras.length || num <= 0) {
        return res.send({error: "Fuera de rango"})
    }

    res.json({ letra: palabras[num - 1] })
})
