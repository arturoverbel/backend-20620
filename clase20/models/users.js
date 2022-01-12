const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    nombre: {type: String, require: true, max: 100},
    apellido: {type: String, max: 100},
    email: {type: String, max: 100},
    edad: Number
})

const User = mongoose.model('User', UserSchema)
module.exports = User