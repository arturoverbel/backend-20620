const mongoose = require('mongoose');
const Usuario = require('./models/usuario')

CRUD()

async function CRUD() {
    try{
        const URL = 'mongodb://127.0.0.1/nuevadb'
        let rta = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("BD connected")
        
        const user = new Usuario({
            nombre: 'asa',
            apellido: 'bb'
        })
        let userSaved = await user.save()
        console.log(userSaved)

        
    } catch(e) {
        console.log(e)
    }
}