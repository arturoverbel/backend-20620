const express = require("express")
const handlebars = require("express-handlebars")

const app = express()

// Seteamos el motor de plantillas

app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        partialsDir: __dirname + "/views/partials"
    })
)
app.set("view engine", "hbs")
app.set("views", "./views")

listPokemon = () => [
    {name: "pikachu", type: "trueno"},
    {name: "charmander", type: "fuego"},
    {name: "bulbasur", type: "planta"},
    {name: "mewtwo", type: "psyquico"},
    {name: "lapras", type: "agua"}
]

app.get("/", (req, res) => {
    res.render("home", {
        list: listPokemon, showList: true
    })
})

app.get("/otra", (req, res) => {
    res.render("otra")
})

app.listen(3000)