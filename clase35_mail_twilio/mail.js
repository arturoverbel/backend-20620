const { createTransport } = require('nodemailer')


const mail = 'amara.mills6@ethereal.email'



const transporter = createTransport({
	host: 'smtp.ethereal.email',
	port: 587,
	auth: {
		user: mail,
		pass: 'E7scy3puG2mSbbN6vN'
	}
})




const mailOptions = {
	from: mail,
	to: mail,
	subject: 'Mail de Prueba from NODE',
	html: '<h1 style="color=blue;">Content from NODE local <span style="color: red;">Nodemailer</span></h1>'
}

transporter.sendMail(mailOptions)
	.then(r => console.log(r))
	.catch(e => console.log('error ', e))
