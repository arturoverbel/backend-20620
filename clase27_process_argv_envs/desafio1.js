const parseArgs = require('minimist')

const options = {
    alias: {
        m: 'modo',
        p: 'puerto',
        d: 'debug'
    }
}

const args = parseArgs(process.argv.slice(2), options)

console.log(args)