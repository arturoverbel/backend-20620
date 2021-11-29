const moment = require('moment')

console.log("Fechas")

let formato = moment().format('MMMM Do YYYY, h:mm:ss a')
let dayWeek = moment().format('dddd')

let dia = moment().format('M/D/YYYY')
let momentFecha = moment("01-01-1950 23:45")

console.log(formato)
console.log(`Hoy es ${dia}`)
console.log("Nací el " + momentFecha.format('M/D/YYYY'))
console.log("Desde que naci ha pasado " + momentFecha.fromNow())
