
const { exec } = require('child_process')

exec('ls', (error, stdout, stderr) => {

    if(error) {
        console.error(`error ${error.message}`)
        return
    }

    if(stderr) {
        console.error(`stderr ${stderr}`)
        return
    }

    console.log(stdout)


})