const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const redis = require('redis')
const client = redis.createClient()

const connectRedis = require('connect-redis')
const RedisStore = connectRedis(session)


const app = express()
app.use(cookieParser())
app.use(session({
    store: new RedisStore({
        host: 'localhost',
        port: 6379,
        client: client,
        ttl: 300
    }),
    secret: 'thesecret',
    resave: false,
    saveUninitialized: false
}))

app.get('/', async (req, res) => {
    
    if (!req.session) {
        res.send("Err")
    }

    if(req.session.views) {
        req.session.views++
        res.send(`<h2>Views ${req.session.views} </h2>`)
    } else { 
        req.session.views = 1
        res.end("Welcome !!")
    }
})

app.get('/info', (req, res) => {
    console.log(req.session)
    console.log(req.sessionID)
    console.log(req.cookies)
    console.log(req.sessionStore)

})


app.listen(8080, () => {
    console.log("Listening 8080 ...")
})