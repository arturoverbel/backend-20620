const { spawn } = require('child_process')

const child = spawn('find',  ['.'])

child.stdout.on('data', data => {
    console.log(`${data}`)
})

child.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
})