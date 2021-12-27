const { options } = require('./options/db.js')
const knex = require('knex')(options)

knex.schema.createTable('ciudades', table => {
    table.increments('id')
    table.string('name')
    table.integer('poblacion')
})
    .then(() => console.log("table created"))
    .catch(err => {console.log(err); throw err; })
    .finally(() => {
        knex.destroy();
    })