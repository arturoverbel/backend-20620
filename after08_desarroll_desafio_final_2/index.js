const express = require('express')

const {studentDao} = require('./daos/index')

const app = express()
const PORT = 8080

app.listen(PORT, () => console.log(`running ${PORT}...`))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    let objeto = await studentDao.getAll() 

    res.send(objeto)
})

app.post("/", async (req, res) => { 
    let objeto = req.body 
    let result = await studentDao.save(objeto) 
    console.log("Nuevo producto agregado") 
    
    return res.send(result) 
}) 