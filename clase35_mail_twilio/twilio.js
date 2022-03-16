const twilio = require('twilio')

const SID = 'AC2e2a8660adede115f63ddca901e5ade8'
const token = 'ec41d336faeab00613e060e9e8e526dc'

const client = twilio(SID, token)

client.messages.create({
    body: 'Saludos desde la clase de NODE JS',
    from: '+16292096947',
    to: '+573163386191'
})
    .then(r => console.log(r))
    .catch(e => console.log('error ', e))