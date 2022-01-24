const Book = require("../models/book.model")

const getBooks = async(req, res) => {
    console.log("GET /")

    try {
        const books = await Book.find()
        res.send(books)
    } catch(e) {
        console.log(e)
    }
}

const insertBook = async(req, res) => {
    console.log("POST /")

    try {
        const book = new Book(req.body)
        const result = await book.save()

        res.send(result)
    } catch(e) {
        console.log(e)
    }
}

const updateBook = async(req, res) => {
    const id = req.params.id
    console.log(`POST /${id}`)

    try {
        const result = await Book.updateOne(
            {_id: id},
            { $set: req.body }
        )

        res.send(result)
    } catch(e) {
        console.log(e)
    }
}

const deleteBook = async(req, res) => {
    const id = req.params.id
    console.log(`DELETE /${id}`)

    try {
        const result = await Book.deleteOne({_id: id})

        res.send(result)
    } catch(e) {
        console.log(e)
    }
}

module.exports = {
    getBooks,
    insertBook,
    updateBook,
    deleteBook
}