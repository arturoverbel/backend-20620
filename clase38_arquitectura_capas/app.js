const express = require('express')
const { bookRouter } = require('./routes/book.routes')
const { authorRouter } = require('./routes/author.routes')

const app = express()
app.use(express.json())

app.use('/api/book', bookRouter)
app.use('/api/author', authorRouter)

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Server running ${PORT} ...`)
})
server.on('error', e => console.error(`SERVER ERROR: `, e))