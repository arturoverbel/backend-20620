const express = require('express')
const faker = require('faker')
const app = express()
faker.locale = 'es'

function createObject(id) {
    return {
        id,
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        color: faker.commerce.color()
    }
}

app.get('/test', (req, res) => {
    const cant = Number(req.query.cant) || 10

    const objs = []
    for(let i = 0; i < cant; i++) {
        objs.push(createObject(i+1))
    }

    res.json(objs)
})

app.listen(3000, () => console.log("Running..."))