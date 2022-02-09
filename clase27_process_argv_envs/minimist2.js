const parseArgs = require('minimist')

const options = {
    alias: {
        n: 'nombre',
        a: 'apellido'
    },
    default: {
        nombre: 'Facundo',
        apellido: 'Villagra'
    }
}

const args = parseArgs(process.argv.slice(2), options)

console.log(args)