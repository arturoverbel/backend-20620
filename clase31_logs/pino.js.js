const express = require('express')
const logger = require('pino')()

logger.level ='info'

const app = express()

logger.info('Pino info')
logger.error(' That error is hoprrible!!')

logger.info('The answer was %d', 42)
logger.info({a: 42}, 'Hello worlds')
logger.info({a: 42, b: 72}, 'Hello worlds')
logger.info({d: {a: 42, b: 72}}, 'Hello worlds')

const child = logger.child({a: 'propery'})
child.info('This a child')
child.error('Breaking Bad')

app.get('/', (req, res) => {

    res.send('Saludos a los studiantes, They    rocks!!'.repeat(30000))
})

app.listen(3000)