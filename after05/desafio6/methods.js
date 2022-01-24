const fs = require('fs')

class Container{
    constructor(fileName){
        this.file = fileName
        this.countID = 0
        this.list = []
    }
    async init(){
        try{
            const data = await fs.promises.readFile(this.file)
            this.list = JSON.parse(data)
            for(const element of this.list){
                if(element.id > this.countID) this.countID = element.id
            }
        }
        catch (error){
            console.log('No se encontro el archivo!!, generando...')
        }
    }
    async write(){
        try{
            const str = JSON.stringify(this.list)
            await fs.promises.writeFile(this.file, str)
        }
        catch(err){
            return `Ocurrio un error al escrbir el archivo ${err}`
        }
    }
    async save(object){
        try{
            this.countID++
            object['id'] = this.countID
            this.list.push(object)
            await this.write()
            return this.countID
        }
        catch(err){
            return `Ocurrio un error al guardar el datos en el archivo${err}`
        }
    }
    getById(id){
        try{
            let element = this.list.find(item => item.id == id)
            return element != undefined ? element : null
        }
        catch(err){
            return `Hubo un error al buscar el elemento${err}`
        }
    }
    getAll(){
        try{
            const elements = this.list
            return elements
        }
        catch(err){
            return `Hubo un error al obtener los elementos${err}`
        }
    }
    async deleteById(id){
        try{
            const index = this.list.findIndex((element) => element.id == id)
            if(index != -1){
                this.list.splice(index, 1)
                await this.write()
            }
        }
        catch(err){
            return `Hubo un error al borrar el elemento ${err}`
        }
    }
    async deleteAll(){
        try{
            this.list = []
            await this.write()
            return `Se borraron todos los elementos del archivo`
        }
        catch(err){
            return `Hubo un error al borrar los elementos ${err}`
        }
    }
}

module.exports = Container

//el funcionamiento de los metodos esta en el archivo metodos.js, fue probado y funciona, sin embargo los archivos generados en las
//pruebas fueron borrados!!