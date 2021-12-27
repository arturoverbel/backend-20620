const { options } = require('./options/db.js')
const knex = require('knex')(options)

knex.from("ciudades")
    .where('poblacion', '<', '1000')
    .where('tiene_mar', '1')
    .update({poblacion: 500})

    .then(() => {
        console.log("cities updateds")
    })
    .catch(err => {console.log(err); throw err; })
    .finally(() => {
        knex.destroy();
    })