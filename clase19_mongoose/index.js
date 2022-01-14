const mongoose = require('mongoose')
const Estudiante = require('./models/estudiante')

CRUD()

async function CRUD() {

    try {

        // CONECTAR

        // Con user and pass: mongodb://{user}:{password}@{host.com}/{database}
        // Default: mongodb://{host.com}/{database}

        const URL = "mongodb://tom:jerry@127.0.0.1/clase19"
        const rta = await mongoose.connect(URL)

        console.log("DB connected")

        // INSERT

        const estudiante = new Estudiante({
            nombre: 'Jorge',
            edad: 25
        })
        await estudiante.save()
        
        console.log("Estudiante created")

        // UPDATE

        let studentUpdated = await Estudiante.updateOne(
            {edad: 25}, // FILTRO
            { $set: {edad: 26} } // UPDATE
        )
        console.log(studentUpdated)

        // FIND

        const estudiantes = await Estudiante.find()
        console.log(estudiantes)

        // DELETE 

        let studentDeleted = await Estudiante.deleteOne({edad: 26})
        console.log(studentDeleted)
        

    } catch (e) {
        console.log(e)
    }

}