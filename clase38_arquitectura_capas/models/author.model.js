const authors = []
let incrementalAuthor = 0

const getAuthor = () => authors

const saveAuthor = author => {
    incrementalAuthor++
    author.id = incrementalAuthor
    authors.push(author); 
    
    return author 
}

module.exports = {
    getAuthor, saveAuthor
}