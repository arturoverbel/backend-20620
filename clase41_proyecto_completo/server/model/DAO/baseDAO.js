

class NewBaseDAO {

    constructor() { }

    getNews = async (_id) => { throw new Error(`Method getNew not implemented`) } 
    insertNew = async (newToInsert) => { throw new Error(`Method insertNew not implemented`) }
    updateNew = async (_id, newToUpdate) => { throw new Error(`Method updateNew not implemented`) }
    deteleNew = async (_id) => { throw new Error(`Method deteleNew not implemented`) }

    getNextID(news = []) {
        const total = news.length

        return total ? parseInt(news[total-1]._id) + 1 : 1
    }

    getIndex(_id, news) {
        return news.findIndex(n => n._id == _id)
    }

}

export default NewBaseDAO