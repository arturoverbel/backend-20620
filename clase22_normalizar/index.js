const normalizr = require("normalizr")
const { normalize, schema } = normalizr
const util = require("util")



const blogposts = [
    {
    id: 1,
    title: "El sol está muy caliente",
    description: "Hablamos de las temperaturas",
    content: "Bla bal balasdnasdn abdjasd",
    author: {
        id: 1,
        name: "Facundo Scienza",
        city: "Buenos Aires"
    },
    comments: [
        {
            id: 1,
            author: "Ezequiel",
            content: "Guaauu"
        },
        {
            id: 2,
            author: "Rolando",
            content: "jajajaja"
        }
    ]
}, 
{
    id: 2,
    title: "La luna",
    description: "LUNA",
    content: "UuuuuuuuuuUUUUU",
    author: {
        id: 1,
        name: "Facundo Scienza",
        city: "Buenos Aires"
    },
    comments: []
}
]


const authorSchema = new normalizr.schema.Entity('authors')
const commentSchema = new normalizr.schema.Entity('comments')
const postSchema = new normalizr.schema.Entity('posts', {
    author: authorSchema,
    comments: [commentSchema]
})

const normalizedBlogpost = normalizr.normalize(blogposts, [postSchema])

console.log(JSON.stringify( normalizedBlogpost))
print(normalizedBlogpost)

function print(obj) {
    console.log(util.inspect(obj, false, 12, true))
}