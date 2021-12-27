const { options } = require('./options/db.js')
const knex = require('knex')(options)

knex.from("ciudades").where("poblacion", "<", "800").del()
    .then(() => {
        console.log("cities deleted")
    })
    .catch(err => {console.log(err); throw err; })
    .finally(() => {
        knex.destroy();
    })