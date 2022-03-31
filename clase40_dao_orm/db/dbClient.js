class DBClient {

    async connect() {
        throw new Error('Not DB client configured')
    }

    async disconnect() {
        throw new Error('Not DB client configured')
    }
}

module.exports = DBClient