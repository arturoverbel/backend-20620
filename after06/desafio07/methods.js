const config = require('./config/data.json')
const { db } = require('./config/data.js')

class Container{
    constructor(table_name){
        this.table = table_name
        this.knex = require('knex')(db)
    }

    async init() {
        await this.knex.schema.createTableIfNotExists(this.table, table => {
            table.increments()
            table.string('nombre', 15)
            table.string('thumbnail', 30)
            table.float('precio')
        })
    }

    async save(object){
        try{
            return await this.knex(this.table).insert([object])
        }
        catch(err){
            return `Ocurrio un error al guardar el datos en la DB ${err}`
        }
    }

    async getById(id){
        try{
            return await this.knex.from(this.table).select("*").where('id', id).limit(1)
        }
        catch(err){
            return `Hubo un error al buscar el elemento ${err}`
        }
    }

    async getAll(){
        try{
            return await this.knex.from(this.table).select("*")
        }
        catch(err){
            return `Hubo un error al buscar el elemento ${err}`
        }
    }
    async deleteById(id){
        try{
            return await this.knex(this.table).where('id', id).del()
        }
        catch(err){
            return `Hubo un error al buscar el elemento ${err}`
        }
    }

}

module.exports = Container

//el funcionamiento de los metodos esta en el archivo metodos.js, fue probado y funciona, sin embargo los archivos generados en las
//pruebas fueron borrados!!