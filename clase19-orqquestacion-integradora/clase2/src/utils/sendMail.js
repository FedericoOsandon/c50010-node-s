const nodemailer = require('nodemailer')
const { configObject } = require('../config')

const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: configObject.gmail_user,
        pass: configObject.gmail_password
    }
})

const sendEmail = async ({service = '',to='example@example.com', subject='', html=''}) => {
    return await transport.sendMail({
        from: `${service}-${configObject.gmail_user}`,
        to,
        subject,
        html
    })
}


module.exports = {
    sendEmail
}