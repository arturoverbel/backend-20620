

const fs = require('fs')

function readArchivo() {
    fs.promises.readFile('saludo.txt', 'utf-8')
        .then( contenido => {
            console.log("El archivo fue leido: " + contenido)
        })
        .catch( error => {
            console.log("Hubo un error");
        })
}

//readArchivo();




async function leerAA() {
    try {  
        const contenido = await fs.promises.readFile('asdasd.txt', 'utf-8')
        console.log(contenido)
    } catch(error) {
        console.log("Hubo un errro")
    }
}

leerAA()

console.log("Baila ahora Yerri")