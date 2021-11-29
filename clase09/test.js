const express = require("express")
const handlebars = require("express-handlebars")

const app = express()

const hbs = handlebars.create({
    extname: ".hbs",
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
});

app.engine(
    "handlebars",
    handlebars.engine()
)

//app.set("view engine", "hbs")
app.set('view engine', 'handlebars');
app.set("views", "./views");



list = () => [
    {name: "A", type: "1"},
    {name: "B", type: "2"},
    {name: "C", type: "3"},
    {name: "D", type: "4"},
    {name: "E", type: "5"}
]

app.get("/", (req, res) => {
    res.render("home", {
        champs: list(), listExists: true
    })
})

app.get('/saludo', (request, response) => {
    response.send(`
        <h2>Hola Ionatan !!!</h2>
        <script> alert("asdasd");</script>
    `)
})

app.listen(process.env.PORT || 3000)