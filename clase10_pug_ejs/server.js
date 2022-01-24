const express = require("express")

const app = express();

app.set('views', './views')
app.set('view engine', 'ejs')


app.get("/", (req, res) => {
    console.log("asdsa")
    res.render("mensaje.ejs", {
        mensaje: "Hola David Vogel !!!"
    })
})

app.get("/pets", (req, res) => {

    const pets = [
        {name: 'Dorado', animal: 'pez', months: 12},
        {name: 'Baltazar', animal: 'perro', months: 11},
        {name: 'Sam', animal: 'perro', months: 8},
        {name: 'Camus', animal: 'perro', months: 100},
        {name: 'Juanita', animal: 'gato', months: 84}
    ]

    const mensaje = "Mascotas de estudiantes JS";


    res.render("pets.ejs", { pets, mensaje })
})

app.get("/datos", (req, res) => {
    return res.render('datos', req.query)
})

app.listen(3000)
console.log("Running server...")