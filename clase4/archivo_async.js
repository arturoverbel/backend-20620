// ASYN !!
const fs = require('fs')

// leer archivoo

fs.readFile('saludo.txt', 'utf-8', (error, data) => {
    if(error) {
        console.log("Hubo un error al intentar leer archivo")
    } else {
        console.log(data);
    }
})

fs.writeFile('nuevo.txt', 'Ezequiel y Tutor Lucas saludos a los dos', error => {
    if(error) {
        console.log("Hubo un error al sobreescribir")
    } else {
        console.log("Se sobrescribió el archivo");
    }
})

fs.appendFile('nuevo.txt', '\nHolaaa David Vogel !!!', error => {
    if(error) {
        console.log("Hubo un error al agreegar texto")
    } else {
        console.log("Se agregó texto al archivo");
    }
})

fs.unlink('nuevo.txt', error => {
    if(error) {
        console.log("Hubo un error al borrar archivo")
    } else {
        console.log("Se borrór el archivo");
    }
})


fs.mkdir("carpeta_nueva", error => {
    if(error !== undefined) {
        fs.writeFile('carpeta_nueva/nuevo.txt', 'Esto es nuevi', error => {
            if(error) {
                console.log("No se pud")
            } else {
                console.log("Archivo creado en carpeta");
            }
        })
    }
})

console.log("Fin del programa")
