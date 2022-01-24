const mongoose = require('mongoose')
const User = require('./models/users')

CRUD()

async function CRUD() {

    try {
        const URL = "mongodb://tom:jerry@127.0.0.1/clase19"
        const rta = await mongoose.connect(URL)

        console.log("DB connected")

        // INSERT MANY

        // await User({ nombre: 'Mauro', apellido: 'Pandolfo', email: "correo1@a.com", edad: 27 }).save()
        // await User({ nombre: 'Sergio', apellido: 'Prellezo', email: "correo1@a.com", edad: 30 }).save()
        // await User({ nombre: 'Ronald', apellido: 'Palacios', email: "correo1@a.com", edad: 31 }).save()
        // await User({ nombre: 'Juliana', apellido: 'Gonzalez', email: "correo1@a.com", edad: 25 }).save()
        // await User({ nombre: 'Facundo', apellido: 'Villagra', email: "correo1@a.com", edad: 36 }).save()
        // await User({ nombre: 'Alan', apellido: 'Rodriguez', email: "correo1@a.com", edad: 26 }).save()
        // await User({ nombre: 'R2', apellido: 'Verbel', email: "correo1@a.com", edad: 15 }).save()

        // FIND

        console.log('\n.\n', await User.find())

        // FIND + PROJECTIONS

        console.log('\n.\n', await User.find({}, {nombre: 1, apellido: 1}))

        // FIND + FILTER + PROJECTIONS

        console.log('\n.\n', await User.find({nombre: 'Alan'}, {nombre: 1, apellido: 1}))

        // FIND + PROJECTIONS + SORT

        console.log('\n.\n', await User.find(
            {}, 
            {
                nombre: 1,
                apellido: 1,
                edad: 1,
                _id: 0
            }
        ).sort({edad: -1}) )

        // FIND + PROJECTIONS + SORT + LIMIT

        console.log('\n.\n', await User.find(
            {}, 
            {
                nombre: 1,
                apellido: 1,
                edad: 1,
                _id: 0
            }
        ).sort({edad: -1}).limit(5) )
        

    } catch (e) {
        console.log(e)
    }

}