const fs = require('fs')

function leerTC() {
    fs.promises.readFile('saludo.txt', 'utf-8')
        .then( contenido => console.log(contenido))
        .catch( error => console.log(error))
}

console.log("asdasd")

leerTC()