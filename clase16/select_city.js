const { options } = require('./options/db.js')
const knex = require('knex')(options)

knex.from('ciudades').select("*")
    .then((rows) => {
        for(const row of rows) {
            console.log(`${row['id']} ${row['name']} ${row.poblacion}`)
        }
        console.log(rows)
    })
    .catch(err => {console.log(err); throw err; })
    .finally(() => {
        knex.destroy();
    })