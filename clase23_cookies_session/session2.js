const express = require('express')
const session = require('express-session')

const app = express()
app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}))

function auth(req, res, next) {
    if(req.session.username === 'facundo' && req.session.admin) {
        return next()
    }

    return res.status(401).send('error auth')
}



app.get('/login', (req, res) => {
    let {username, password } = req.query
    
    if(!username || !password) return res.send('Login failed')

    username = username.toLowerCase()
    password = password.toLowerCase()

    if(username !== 'facundo' || password !== 'password') {
        return res.send('Login failed')
    }

    req.session.username = username
    req.session.admin = true

    res.send("Login sucess !!")

})

app.get('/privado', auth, (req, res) => {
    res.send('El admin, la clave de la bomba nuclear es 1234456')
})

app.get('/logout', (req, res) => {
    req.session.destroy( err => {
        if( err ) return res.send({status: 'Logout ERROR', body: err })

        res.send('Logout ok')
    })
})


app.listen(3000, () => {
    console.log("Listening 3000...")
})