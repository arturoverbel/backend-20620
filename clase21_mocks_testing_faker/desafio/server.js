const express = require('express')
const UserRouter = require('./router/usuarios')
const app = express()

app.use(express.json())



app.use('/api/usuarios', new UserRouter())


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Listening ${PORT} ...`)
})