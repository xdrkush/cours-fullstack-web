const nodemailer = require('nodemailer');
require('dotenv').config()

const {
    MAILER_HOST,
    MAILER_SERVICE,
    MAILER_PORT,
    MAILER_USER,
    MAILER_PASS
} = process.env;

const transporter = nodemailer.createTransport({
    host: MAILER_HOST,
    service: MAILER_SERVICE,
    port: MAILER_PORT,
    auth: {
        user: MAILER_USER,
        pass: MAILER_PASS
    }
})

const newMessage = {
    name: 'Pisstash',
    email: "piss@tash.com",
    object: "Object du message",
    message: "Mon super message !"
}

const sendMail = (data) => {
    const { mail, to, object, message } = data;
    try {
        const mailOptions = {
            from: MAILER_USER,
            to: mail,
            subject: object,
            html: `
                    <h3>De la part de: ${name}</h3>
                    <h3>Son mail: ${email}</h3>
                    <p>${message}</p>
                `
        }

        return transporter.sendMail(mailOptions, (err, info) => {
            if (err) console.log(err)
            else console.log(info)
        })

    } catch (error) {
        throw error;
    }
}

sendMail(newMessage)