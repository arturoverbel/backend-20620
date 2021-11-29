const fs = require('fs')

class Contenedor {
    constructor(filename) {
        console.log("Iniciando Contenedor")
        this.countID = 0
        this.file = filename
        this.lista = []

    }

    async save( objeto ) {
        this.countID++;
        objeto["id"] = this.countID

        this.lista.push(objeto)

        await this.write()

        return this.countID;
    }

    async deleteById(id) {

        // Una
        this.lista = this.lista.filter(element => element.id != id)

        // Dos
        //let index = this.lista.findIndex((element) => element.id == id)
        //this.lista.splice(index, 1)

        // Unaa
        // for(const index in this.lista) {
        //     let element = this.lista[index]
        //     if(element.id == id) {
        //         this.lista.splice(index, 1)
        //         break;
        //     }
        // }

        await this.write()
    }

    async write() {
        let string = JSON.stringify(this.lista)
        await fs.promises.writeFile(this.file, string)
    }

    getAll() {
        return this.lista
    }

    async init() {
        try {
            let data = await fs.promises.readFile(this.file)
            this.lista = JSON.parse(data)
            
            for(const element of this.lista) {
                if(element.id > this.countID) this.countID = element.id
            }

            console.log("Last ID: ", this.countID)
        } catch (error) {
            console.log("Aun no hay archivo")
        }
    }
}


module.exports = Contenedor