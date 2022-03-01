const express = require('express')
const log4js = require('log4js')

const app = express()

log4js.configure({
    appenders: {
        miLoggerConsole: { type: 'console' },
        miLoggerFile: { type: 'file', filename: 'info.log'}
    },
    categories: {
        default: { appenders: ['miLoggerConsole'], level: 'trace'},
        consola: { appenders: ['miLoggerConsole'], level: 'debug'},
        archivo: { appenders: ['miLoggerFile'], level: 'warn'},
        todo: { appenders: ['miLoggerConsole', 'miLoggerFile'], level: 'error'},
    }
})

/*
trace
debug
info
warn
error
fatal
*/

const logger = log4js.getLogger()
logger.trace('Cogimos una cerveza')
logger.debug('Cerveza es Corona')
logger.info('Cervaza esta fria')
logger.warn('La cerveza se esta calentando')
logger.error('Se cayo la cerveza')
logger.fatal('Se quebro la botella')

const loggerFile = log4js.getLogger('archivo')
loggerFile.trace('Cogimos una cerveza')
loggerFile.debug('Cerveza es Corona')
loggerFile.info('Cervaza esta fria')
loggerFile.warn('La cerveza se esta calentando')
loggerFile.error('Se cayo la cerveza')
loggerFile.fatal('Se quebro la botella')

const loggerAll = log4js.getLogger('todo')
loggerAll.trace('Cogimos una cerveza')
loggerAll.debug('Cerveza es Corona')
loggerAll.info('Cervaza esta fria')
loggerAll.warn('La cerveza se esta calentando')
loggerAll.error('Se cayo la cerveza')
loggerAll.fatal('Se quebro la botella')

app.get('/', (req, res) => {

    res.send('Saludos a los studiantes, They    rocks!!'.repeat(30000))
})

app.listen(3000)