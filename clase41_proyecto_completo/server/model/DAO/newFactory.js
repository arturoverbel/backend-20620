import NewMemoryDAO from './newMemory.js'
import NewFileDAO from './newFile.js'
import NewDBMongoDAO from './newDBMongo.js'

class NewsFactoryDAO { 
    static get(type) {
        switch(type.toLowerCase()) {
            case 'memory': return new NewMemoryDAO()
            case 'file': return new NewFileDAO(process.cwd() + '/news.json')
            case 'mongo': return new NewDBMongoDAO('coderhouse', 'news')
            default: return new NewMemoryDAO()
        }
    }
}

export default NewsFactoryDAO