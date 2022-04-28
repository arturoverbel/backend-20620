const Router = require('koa-router')

const router = new Router({
    prefix: '/books'
})

const books = [
    { id: 1, name: '1984', author: 'George Orwel'},
    { id: 2, name: 'HP y la camara de los secretos', author: 'JK Rownling'},
    { id: 3, name: 'eloquent js', author: 'Ni idea'},
    { id: 4, name: 'Revoluciones', author: 'Diana Uribe'}
]

router.get('/', ctx => {
    ctx.body = {
        status: 'success',
        message: books
    }
})

router.get('/:id', ctx => {
    const booksFiltered = books.filter(b => b.id == ctx.params.id)

    if(booksFiltered.length) {
        ctx.body = booksFiltered[0]
    } else {
        ctx.response.status = 404
        ctx.body = {
            status: 'error',
            message: 'Book not found'
        }
    }
})

router.post('/', ctx => {
    if(!ctx.request.body.id || !ctx.request.body.name || !ctx.request.body.author) {
        ctx.response.status = 400
        ctx.body = {
            status: 'error',
            message: 'Bad request'
        }
    } else {
        const newBook = books.push({
            id: ctx.request.body.id,
            name: ctx.request.body.name,
            author: ctx.request.body.author
        })
        ctx.response.status = 201
        ctx.body = {
            status: 'success',
            message: newBook
        }
    }
})

router.delete('/:id', ctx => {
    const id = ctx.params.id
    const index = books.findIndex(b => b.id == id)
    books.splice(index, 1)
    ctx.response.status = 200

    ctx.body = {
        status: 'success',
        message: `Booke deleted (${id})`
    }
})


module.exports = router