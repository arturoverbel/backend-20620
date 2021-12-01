const express = require('express')
const Libreria = require('./libs/libreria')
const { Router } = express;

const app = express();
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


const router = Router();
const libreria = new Libreria(__dirname + "/data/libros.json")

router.get("/", (req, res) => {
    return res.json(libreria.list)
})

router.get("/:id", (req, res) => {
    let id = req.params.id
    return res.json(libreria.find(id))
})

router.post("/", (req, res) => {
    let obj = req.body
    return res.json(libreria.insert(obj))
})

router.put("/:id", (req, res) => {
    let obj = req.body
    let id = req.params.id
    return res.json(libreria.update(id, obj))
})

app.use("/api/productos", router)
app.use(express.static('./views'))

app.listen(3000)