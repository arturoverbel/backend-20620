const faker = require('faker')
const { fa } = require('faker/lib/locales')
const ContenedorMemoria = require('../contenedor/contenedor')

class ApiUsersMock extends ContenedorMemoria {

    constructor() {
        super()
    }

    populate(cant = 5) {
        const nuevos = []
        for(let i = 0; i < cant; i++) {
            const nuevo = this.generarUsuario()
            const saved = this.guardar(nuevo)
            nuevos.push(saved)
        }

        return nuevos
    }

    generarUsuario() {
        return {
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            website: faker.internet.url(),
            image: faker.image.avatar()
        }

    }
}

module.exports = ApiUsersMock