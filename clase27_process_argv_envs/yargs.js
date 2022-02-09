const yargs = require('yargs')(process.argv.slice(2))

const args = yargs
    .default({
      nombre: 'Alejandro',
      apellido: 'Uribe'
    })
    .alias({
        n: 'nombre',
        a: 'apellido'
    })
    .boolean('vivo')
    .argv

console.log(args)