import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schemaStudent from './schema/student.schema.js'
import * as resolvers from './resolvers/student.resolvers.js'

const app = express()

app.use('/graphql', graphqlHTTP({
    schema: schemaStudent,
    rootValue: resolvers,
    graphiql: true
}))

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server running (${PORT})...`)
})
