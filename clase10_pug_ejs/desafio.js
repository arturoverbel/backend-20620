const express = require("express")

const app = express();
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
const personas = []

app.set('views', './views')
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    
    res.render("desafio/index", {
        personas
    })
})

app.post("/personas", (req, res) => {
    
    personas.push(req.body)

    res.render("desafio/index", {
        personas
    })
})

app.listen(3000)
console.log("running")