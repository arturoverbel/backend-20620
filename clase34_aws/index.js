const express = require('express')
const AWS = require('aws-sdk')

AWS.config.update({ region: 'us-east-1' })

const sns = new AWS.SNS()
const SNS_TOPIC_ARN = 'arn:aws:sns:us-east-1:757598741948:notifications_students'

const dynamodb = new AWS.DynamoDB.DocumentClient()
const TABLE_NAME = 'students'

const app = express()
app.use(express.json())

app.get('/', (req, res) => { res.send('test api students') })

async function scanDynamoRecords(scanParams) {
    try {
        let dynamoData = await dynamodb.scan(scanParams).promise()
        const items = dynamoData.Items

        while (dynamoData.LastEvaluatedKey) {
            scanParams.ExclusiveStartKey = dynamoData.LastEvaluatedKey
            dynamoData = await dynamodb.scan(scanParams).promise()
            items.push(...dynamoData.Items)
        }

        return items
    } catch (e) {
        throw new Error(e)
    }
}

app.get('/api/students', async (req, res) => {
    const params = { TableName: TABLE_NAME }

    try {
        const students = await scanDynamoRecords(params)
        res.json(students)
    } catch (error) {
        console.log('Error', error)
        res.sendStatus(500).send(error)
    }

})

app.post('/api/students', (req, res) => {
    const params = { TableName: TABLE_NAME, Item: req.body }

    dynamodb.put(params).promise()
        .then(() => {
            console.log('Se guardo')
            const student = JSON.stringify(req.body)

            sns.publish({
                Message: `New student ${student}`,
                Subject: 'New Student',
                TopicArn: SNS_TOPIC_ARN
            }).promise()
        })
        .then(data => {
            const body = {
                Operation: 'SAVE',
                Message: 'SUCCESS',
                Item: req.body
            }
            res.json(req.body)
        })
        .catch(error => {
            res.sendStatus(500).send(error)
        })
})

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Listening ${PORT}...`)
})
server.on('error', error => {console.log(error)})