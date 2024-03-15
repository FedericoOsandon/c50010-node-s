const twilio = require('twilio')
const { configObject } = require('../config/connectDB')


const { twilio_sid, twilio_token, twilio_number } = configObject


const client = twilio(twilio_sid, twilio_token)

exports.sendSms = ( nombre, apellido ) => client.messages.create({
    body: `Gracias por tu compra ${nombre} ${apellido}`,
    from: twilio_number,
    to: '+34613652154'
})