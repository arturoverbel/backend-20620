require('dotenv').config()

const fondo = process.env.FONDO
const frente = process.env.FRENTE
const port = parseInt(process.env.PUERTO)
const debug = Boolean(process.env.DEBUG)

console.log({fondo, frente, port, debug})