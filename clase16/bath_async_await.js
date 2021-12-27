const { options } = require('./options/db.js')
const knex = require('knex')(options)

const cities = [
    { name: 'Bogota', poblacion: 7181 },
    { name: 'Buenos Aires', poblacion: 3075 },
    { name: 'La Plata', poblacion: 193 },
    { name: 'Mendoza', poblacion: 115 }
];

(async () => {
    try {
        console.log("--> Borramos todos")
        await knex("ciudades").del()

        console.log("Insertamos las ciudades")
        await knex("ciudades").insert(cities)

        console.log("--> leer todas las ciudades")
        let rows = await knex.from("ciudades").select("*")
        for(r of rows)
            console.log(`${r.id}. ${r.name} ${r.poblacion}`)

        console.log("--> insertemos solo uno")
        await knex("ciudades").insert({name: 'Cartagena', poblacion: 914 })

        console.log("---> VUelve y leemos otra vez")
        rows = await knex.from("ciudades").select("*")
        for(r of rows)
            console.log(`${r.id}. ${r.name} ${r.poblacion}`)
    } catch(err) {
        console.log(err)
    } finally {
        knex.destroy();
    }
})()