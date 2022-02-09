const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

const PRIVATE_KEY = 'facundovillagra'
const users = []

function generarToken(user) {
    const data = {
        username: user.username,
        rol: user.rol
    }

    return jwt.sign( { data }, PRIVATE_KEY, { expiresIn: '24h'} )
}


function auth(req, res, next) {
    const authHeader = req.headers.token

    if(!authHeader) return res.status(401).json({error: 'not auth'})
    
    jwt.verify(authHeader, PRIVATE_KEY, (err, decoded) => {
        if(err) {
            return res.status(403).json({error: 'not auth'})
        }
        
        req.user = decoded.data
        next()
    })
}


app.post('/register', (req, res) => {
    const { username, password, rol } = req.body

    const userExists = users.find(u => u.username == username)
    if(userExists) {
        return res.json({error: 'User already exists'})
    }
    
    const user = { username, password, rol }
    users.push(user)

    const token = generarToken(user)

    res.json({ token })

})


app.post('/login', (req, res) => {
    const { username, password } = req.body

    const user = users.find(u => u.username == username && u.password == password)
    if(!user) {
        return res.json({error: 'credential fails'})
    }

    const token = generarToken(user)
    res.json({ token })
})

app.get('/info', auth, (req, res) => {
    if(req.user) res.send('Show info')
    else res.send('Not permission')
})

app.get('/admin', auth, (req, res) => {
    if(req.user.rol == 'admin') res.send('Show info admin')
    else res.send('Not permission of admin')
})

app.listen(8080, () => {
    console.log('Listening...')
})