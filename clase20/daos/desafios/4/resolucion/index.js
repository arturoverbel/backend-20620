import mongoose from 'mongoose'

/* --------------------------------------------------------------------- */
/*  Definición del esquema de documento y del modelo                     */
/*  (para poder interactuar con la base de datos: leer, escribir, etc)   */
/* --------------------------------------------------------------------- */
const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: {
        type: String, unique: true
    }
})
const usuarioModel = mongoose.model('usuarios', usuarioSchema)

/* ------------------------------------------------------------------ */
/*               Conexión a la base de datos : colegio                */
/* ------------------------------------------------------------------ */

try {
    await mongoose.connect('mongodb+srv://daniel:daniel123@misdatos.fs00f.mongodb.net/ecommerce?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,

    })
    console.log('Base de datos conectada')

    try {
        /* ------------------------------------------------------------------- */
        /*   Escritura de la base de datos: ecommerce, collection: usuarios    */
        /* ------------------------------------------------------------------- */
        const usuarioNuevo = new usuarioModel({ nombre: 'Federico', apellido: 'Perez', dni: '320118321' })
        await usuarioNuevo.save()
        console.log('usuario agregado!')

        //----------------------------------------------------------------------------
        /* listar usuarios representándolos en la consola */
        //----------------------------------------------------------------------------
        let usuarios = await usuarioModel.find({})
        usuarios.forEach(usuario => {
            console.log(JSON.stringify(usuario))
        })
    }
    catch (error) {
        console.log(`Error en operación de base de datos ${error}`)
    }
}
catch (error) {
    console.log(`Error de conexión a la base de datos ${error}`)
}
