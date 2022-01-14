const fs = require('fs')

class ContenedorFile {

    constructor(path) {
        this.path = path
    }

    async connect() {
        return true
    }

    async getAll() {
        try {
            return JSON.parse(fs.readFileSync(this.path, 'utf-8'))
        } catch (error) {
            console.log(error)

            return []
        }
    }

    async save(obj) {
        const objs = await this.getAll()
        let newId = (objs.length == 0) ? 1 : objs[objs.length - 1].id + 1

        const newObj = { ...obj, id: newId }
        objs.push(newObj)

        try {
            const result = fs.writeFileSync(this.path, JSON.stringify(objs))

            return result
        } catch (error) {
            throw new Error(`Error on saving: ${error}`)
        }
    }

}


module.exports = ContenedorFile