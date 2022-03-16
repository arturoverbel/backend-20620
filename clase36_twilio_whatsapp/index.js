const accountSid = 'AC2e2a8660adede115f63ddca901e5ade8';
const authToken = 'ec41d336faeab00613e060e9e8e526dc';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'Hiii R2',
         to: 'whatsapp:+573163386191'
       })
      .then(message => console.log(message.sid))
      .catch(e => console.log(e))