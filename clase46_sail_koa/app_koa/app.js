const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
    ctx.body = 'Saludos a Sergio que siempre me salva =D'
})

app.listen(3000)