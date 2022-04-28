const Koa = require('koa')
const koaBody = require('koa-body')
const books = require('./books')

const app = new Koa()

app.use(koaBody())

app.use(books.routes())

app.listen(3000, () => {
    console.log('Running...')
})