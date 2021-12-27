const { options } = require('./options/db.js')
const knex = require('knex')(options)

const cities = [
    { name: 'Bogota', poblacion: 7181 },
    { name: 'Buenos Aires', poblacion: 3075 },
    { name: 'La Plata', poblacion: 193 },
    { name: 'Mendoza', poblacion: 115 }
]

knex('ciudades').insert(cities)
    .then(() => console.log("data inserted"))
    .catch(err => {console.log(err); throw err; })
    .finally(() => {
        knex.destroy();
    })