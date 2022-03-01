const express = require('express')
const log4js = require('log4js')

const app = express()

log4js.configure({
    appenders: {
        consola: { type: 'console' },
        file: { type: 'file', filename: 'error.log'}
    },
    categories: {
        default: { appenders: ['consola'], level: 'all'},
        custom: { appenders: ['file', 'consola'], level: 'all'}
    }
})


app.get('/', (req, res) => {

    res.send('Saludos a los studiantes, They    rocks!!'.repeat(30000))
})

app.listen(3000)