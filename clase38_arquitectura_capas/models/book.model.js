const { options } = require('../config/db')
const knex = require('knex')(options)

const getBook = async () => {
    return await knex.from("books").select("*")
}
const saveBook = async data => {
    await knex("books").insert([data])
    
    return data
}

module.exports = {
    getBook, saveBook
}
