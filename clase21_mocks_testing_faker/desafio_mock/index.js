const faker = require('faker')
const fs = require('fs')

var str = 'NOMBRE, APELLIDO, EMAIL, TRABAJO, LUGAR<br>'

for(let i = 0; i < 100; i++) {
    str += faker.name.firstName() + ', '
           faker.name.lastName() + ', '
           faker.internet.email() + ', '
           faker.name.jobTitle() + ', '
           faker.random.locale() + '<br>'
}

fs.writeFile('./testing.html', str, (err) => {
    if( err ) console.log(err)
    else console.log('File created')
})