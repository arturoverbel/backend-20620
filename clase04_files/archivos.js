const fs = require('fs')

// LECTURA DE ARCHIVO
//const data = fs.readFileSync('un_archivo.txt', 'utf-8');
//console.log(data)


// ESCRIBIR EN UN ARCHIVO

let filename = 'archivo_nuevo.txt'
fs.writeFileSync(filename, 'Hola Carlos !! \nComo vamos !!! =D')


// AGREGAR TEXTO A UN ARCHIVO
fs.appendFileSync('un_archivo.txt', '\n\nSalud Cliver !! :brindis:')


// Guardar datos JSON
let dataJson =  [
    {nombre: 'Jorge', apellido: 'Santamaria'},
    {nombre: 'Ezequiel', apellido: 'Barrera'},
    {nombre: 'Carlos', apellido: 'Forero'}
]

let dataString = JSON.stringify(dataJson)
fs.writeFileSync('archivo.json', dataString)


// ELIMINAR ARCHIVO
fs.unlinkSync('un_archivo.txt')


console.log("----------------------------------------------------------")

try {
    const data2 = fs.readFileSync('no_existe.txt', 'utf-8');
    console.log(data2)

    const data2 = fs.readFileSync('no_existe.txt', 'utf-8');
    console.log(data2)

    const data2 = fs.readFileSync('no_existe.txt', 'utf-8');
    console.log(data2)

    const data2 = fs.readFileSync('no_existe.txt', 'utf-8');
    console.log(data2)
} catch (error) {
    console.log("No se encontró el archivo")
    console.log(error)
}



console.log("Se termina el progama")