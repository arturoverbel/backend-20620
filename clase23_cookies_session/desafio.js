const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())
app.use(express.json())


app.post('/cookies', (req, res) => {
    let data = req.body;

    res.cookie(data.key, data.value, { maxAge: data.time}).send('Cookie done')
    console.log(data)
})

app.get('/cookies', (req, res) => {
    res.send(req.cookies)
})

app.delete('/cookies/:key', (req, res) => {
    let key = req.params.key
    if(key in req.cookies) {
        res.clearCookie(key).send(`Cookie ${key} deleted`)
    } else {
        res.send(`cookie ${key} not found`)
    }

})

app.listen(3000, () => {
    console.log("Listening 3000...")
})
