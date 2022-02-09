const parseArgs = require('minimist')

const options = {
    default: {
        nombre: 'Facundo',
        apellido: 'Villagra'
    }
}

const args = parseArgs(['-a', '1', '-b', '2', 'un-valor-suelto', '--apellido', 'Carlos'], options)

console.log(args)