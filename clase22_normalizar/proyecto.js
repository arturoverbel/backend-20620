const { normalize, denormalize, schema } = require("normalizr")
const { print, blogposts } = require("./data")


const author = new schema.Entity('authors')
const comment = new schema.Entity('comment', { author })
const post = new schema.Entity('post', {
    author,
    comments: [comment]
})

const dataNormalized = normalize(blogposts, [post])
print(dataNormalized)

const dataDesnormalized = denormalize(
    dataNormalized.result,
    [post],
    dataNormalized.entities
)
print(dataDesnormalized)



