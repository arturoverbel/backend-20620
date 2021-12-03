const express = require("express")

const app = express();

app.set('views', './views')
app.set('view engine', 'pug')


app.get("/", (req, res) => {
    res.send("Holaa")
})

app.get("/hello", (req, res) => {
    return res.render('hello.pug', {
        mensaje: 'Saludos Micael'
    })
})

app.get("/datos", (req, res) => {
    return res.render('datos.pug', req.query)
})

app.listen(3000)
console.log("Running...")