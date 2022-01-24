const express = require('express')
const ApiUsersMock = require('../api/users')

class UserRouter extends express.Router {
    constructor() {
        super()
        const apiUsers = new ApiUsersMock();

        this.post('/populate', (req, res) => {
            const cant = Number(req.query.cant) || 5
            const users = apiUsers.populate(cant)
            res.json(users)
        })

        this.get('/', (req, res) => {
            const users = apiUsers.listarAll()
            res.json(users)
        })
    }
}

module.exports = UserRouter