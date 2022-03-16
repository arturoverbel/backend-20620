const { createTransport } = require('nodemailer')
const ejs = require('ejs');

const mail = 'arturo.verbel@gmail.com'
const mail_to = process.argv[2] || 'arturo-verbel@hotmail.com'

const transporter = createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	auth: {
		user: mail,
		pass: 'oleihozmnorbecwk'
	}
})


let data = 'My data ...';
ejs.renderFile('index.html.ejs', {data})
	.then(r => {
		transporter.sendMail({
			from: mail,
			to: [mail_to],
			subject: 'Mail de Prueba from NODE',
			html: r,
			attachments: [ { path: 'gaston.jpeg'} ]
		})
			.then(r => console.log(r))
			.catch(e => console.log('error ', e))
	})

