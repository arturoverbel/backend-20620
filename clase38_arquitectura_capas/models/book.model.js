const datos = []
let incremental = 0

const getBook = () => datos

const saveBook = data => {
    incremental++
    data.id = incremental
    datos.push(data); 
    
    return data 
}

module.exports = {
    getBook, saveBook
}