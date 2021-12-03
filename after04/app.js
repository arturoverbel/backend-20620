const express = require('express')
const Libreria = require('./libs/libreria')
const multer = require('multer')
const { Router } = express;

const app = express();
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// SET FILE
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage })
app.use('/files', express.static('uploads'))


// SET TEMPLATE ENGINE
app.set('views', './views')
app.set('view engine', 'ejs')

const router = Router();
const libreria = new Libreria(__dirname + "/data/libros.json")

router.get("/", (req, res) => {
    return res.json(libreria.list)
})

router.get("/:id", (req, res) => {
    let id = req.params.id
    return res.json(libreria.find(id))
})

router.post("/", upload.single('thumbnail'), (req, res) => {
    let obj = req.body
    obj.thumbnail = "/files/" + req.file.filename;


    libreria.insert(obj)
    console.log("New book added.")

    return res.redirect("/list")
})

router.put("/:id", (req, res) => {
    let obj = req.body
    let id = req.params.id
    return res.json(libreria.update(id, obj))
})

app.use("/api/productos", router)

app.get("/", (req, res) => {
    return res.render('ejs/form')
})

app.get("/list", (req, res) => {
    
    return res.render('ejs/list', {
        list: libreria.list
    })
})


app.listen(3000)