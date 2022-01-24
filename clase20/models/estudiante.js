const mongoose = require('mongoose')
const { Schema } = mongoose;

const EstudianteSchema = new mongoose.Schema({
    nombre: {type: String, require: true, max: 100},
    edad: Number
})

const Estudiante = mongoose.model('Estudiante', EstudianteSchema)
module.exports = Estudiante