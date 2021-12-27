const { options } = require('./options/db.js')
const knex = require('knex')(options)


knex.from('ciudades').select("name", "poblacion", "tiene_mar").orderBy("name", "desc")
    .then((rows) => {
        console.log(rows)
    })
    .catch(err => {console.log(err); throw err; })
    .finally(() => {
        knex.destroy();
    })