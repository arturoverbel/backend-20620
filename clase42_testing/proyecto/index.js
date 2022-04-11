const express = require('express')
const RouterUsers = require('./route.js')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api', new RouterUsers())

module.exports = app