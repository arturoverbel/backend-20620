const Contenedor = require('./contenedor.js')

const run = async function() {
    const cc = new Contenedor("productos.json")
    await cc.init()


    let lista = cc.getAll()
    console.log("Tamaño: ", lista.length)

    let id = await cc.save({nombre: "Alejandro", edad: 24})
    console.log("Nuevo item con id: ", id)

};

run();