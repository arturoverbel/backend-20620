const express = require('express')

const app = express()

const randoms = (min = 1, max = 1000) => Math.floor(Math.random() * (max - min + 1) + min)

app.get('/api/randoms', (req, res) => {

    const cant = parseInt(req.query?.cant) || 1000000000

    result = {}
    for (let i = 0; i < cant; i++) {
        const num = randoms()

        if(num in result) result[num]++
        else result[num] = 1
    }

    res.send(result)
})

app.listen(8080)