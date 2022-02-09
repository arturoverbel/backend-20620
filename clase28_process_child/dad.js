const { fork } = require('child_process')
const forked = fork('child.js')

forked.on('message', msg => {
    console.log(`From child ${JSON.stringify(msg)}`)
})

console.log('Init proccess Dad')
setTimeout(() => {
    forked.send({mensaje: 'Hii'})
}, 5000);
