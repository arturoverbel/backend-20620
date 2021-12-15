import express from "express"

import Perimetro from "./perimetro"
import Superficie from "./superficie"

const app = express();

app.get("/", (req, res) => {
    res.send(`Calculator`)
})

app.get("/cuadrado/perimetro/:lado", (req, res) => {
    let lado = parseInt(req.params.lado)
    let result = Perimetro.calcularCuadrado(lado)
    res.send(`El perimetro del cuadrado es ${result}`)
})

app.get("/cuadrado/superficie/:lado", (req, res) => {
    let lado = parseInt(req.params.lado)
    let result = Superficie.calcularCuadrado(lado)
    res.send(`La superficie del cuadrado es ${result}`)
})

app.listen(8080, () => {
    console.log("Running app ...")
})