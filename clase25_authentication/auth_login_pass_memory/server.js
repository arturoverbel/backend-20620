const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')


// DATABASE
const users = []


const app = express()

app.use(session({
    secret: 'cliver123',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30000 } // secs
}))


app.engine('.hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main.hbs'
}))
app.set('view engine', '.hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))


//-------------------------------
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

// REGISTER

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
})

app.post('/register', (req, res) => {
    const {username, password } = req.body

    const user = users.find(u => u.username == username)
    if(user) return res.render('register-error')

    users.push({username, password, contador: 0})
    res.redirect('/login')
})

// LOGIN
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})

app.post('/login', (req, res) => {
    const {username, password } = req.body

    const user = users.find(u => u.username == username)
    if(!user || user.password != password) {
        return res.render('login-error')
    }

    req.session.username = username
    req.session.contador = 0

    res.redirect('/profile')
})

// PROFILE
app.get('/profile', (req, res) => {


    if(req.session.username) {
        const user = users.find(u => u.username == req.session.username)

        user.contador++
        res.render('profile', {
            username: req.session.username,
            contador: user.contador
        })
    } else {
        res.redirect('/login')
    }

    
})

// LOGOUT
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        res.redirect('/login')
    })
})


const PORT = 8080
app.listen(PORT, () => {
    console.log(`listening ${PORT}...`)
})