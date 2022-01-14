const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new mongoose.Schema({
    nombre: {type: String, require: true, max: 100},
    apellido: {type: String, require: true, max: 100}
})

//export const usuarios = mongoose.model(usuariosCollection, UsuarioSchema)
const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;