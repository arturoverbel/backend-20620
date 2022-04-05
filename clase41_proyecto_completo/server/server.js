import express from 'express'
import config from './config/config.js'
import cors from 'cors'
import RouterNews from './routes/news.router.js'

const app = express()

if(config.NODE_ENV == 'develop') app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const routerNews = new RouterNews()

app.use('/news', routerNews.start())

const server = app.listen(config.PORT, () => {
    console.log(`Server listen on ${config.PORT} (${config.NODE_ENV} - ${config.TYPE_DB})`)
})
server.on('error', e => console.log('Error: ', e))