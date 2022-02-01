const express = require('express')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const routes = require('./routes')
const mongoose = require('mongoose')

const Users = require('./models')


passport.use('login', new LocalStrategy(
    (username, password, done) => {

        Users.findOne({ username }, (err, user) => {
            if(err) return done(err)

            if(!user) {
                console.log('User not found with username ' + username)
                return done(null, false)
            }

            return done(null, user)
        })


    }
))

passport.use('signup', new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
        console.log("-----------------")

        Users.findOne({'username': username }, (err, user) => {
            if(err) {
                console.log("Error signup " + err)
                return done(err)
            }

            if(user) {
                console.log("User already exists")
                return done(null, false)
            }

            const newUser = { username, password, name: req.body.name }
            Users.create(newUser, (err, userWithId) => {
                if(err) {
                    console.log("Error saving user " + err)
                    return done(err)
                }
                console.log(userWithId)
                return done(null, userWithId)
            })

        })

    }
))

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser((id, done) => {
    Users.findById(id, done)
})



// INICIAMOS SERVER
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'cliver123',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: { 
        maxAge: 30000,
        secure: false,
        httpOnly: false
    }
}))


// INICIALIZAMOS EL PASSPORT
app.use(passport.initialize())
app.use(passport.session())
app.use((req, res, next) => {
    next()
})

app.get('/', routes.getRoot)
app.get('/login', routes.getLogin)
app.post(
    '/login',
    passport.authenticate('login'),
    routes.postLogin
)

app.get('/signup', routes.getSignup)
app.post(
    '/signup',
    passport.authenticate('signup', {failureRedirect: '/failsignup'}),
    routes.postSignup
)
app.get('/failsignup', routes.getFailSignup)

function checkAuthentication(req, res, next) {
    if(req.isAuthenticated()) next();
    else res.redirect('/login')
}

app.get('/private-route', checkAuthentication, (req, res) => {
    const { user } = req
    res.send("<h1>RUTO OK !! </h1>")
})


function conectarDB(url, cb) {
    mongoose.connect(
        url, 
        { useNewUrlParser: true, useUnifiedTopology: true },
        err => { 
            if(!err) {
                console.log("DB connected")
            }
            if(cb != null) {
                cb(err)
            }
        }
    )
}

conectarDB('mongodb://localhost:27017/coderhouse', err => {
    if(err) return console.log("Error connect DB")

    app.listen(8080, () => {
        console.log("Listening...")
    })
})

