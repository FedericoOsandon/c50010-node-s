const nodemailer = require('nodemailer')
const { configObject } = require('../config/connectDB')

const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: configObject.gmail_user,
        pass: configObject.gmail_pass
    }
})


exports.sendMail = async (to, subject, html) => await transport.sendMail({
    from: 'Coder test <projectodigitalgen@gmail.com>',
    to,
    subject ,
    html,
    attachments: [{
        filename: 'nodejs.png',
        path: __dirname + '/nodejs.png',
        cid: 'nodejs'
    }]
})