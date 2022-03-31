const minimist = require('minimist')
const ProductApi = require('./services/productApi')

const productApi = new ProductApi()

async function exec() {
    const argv = minimist(process.argv.slice(2))
    const {cmd, id, name, price} = argv

    try {

            switch(cmd.toLowerCase()) {
                case 'add':
                    console.log('add')
                    const addResult = await productApi.add({name, price})
                    console.log(addResult)
                    break
                    
                case 'get':
                    console.log('get')
                    const getResult = await productApi.get()
                    console.log(getResult)
                    break
                default:
                    console.log('cmd not valid')
            }


    }catch(e) {
        console.log(e)
    }

    await productApi.exit() 
}

exec()