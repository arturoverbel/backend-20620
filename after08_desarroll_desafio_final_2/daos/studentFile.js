const ContenedorFile = require("../contenedor/contenedorFile")
const config = require("../config")

class StudentFile extends ContenedorFile {
    constructor() {
        super(`${config.fileSystem.filepath}`)

        super.connect()
    }

    async getAll() {
        return super.getAll()
    }

    async save(obj) {
        return super.save(obj)
    }

}

module.exports = StudentFile