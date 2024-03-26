const {Router} = require('express')
const { fork } = require('child_process')
const { sendMail } = require('../../utils/sendEmail.js')
const { faker } = require('@faker-js/faker')
const compression = require('express-compression')
const router = Router()



router.get('/logger', (req, res) => {
    req.logger.warning('warning ejecutandose')
    // req.logger.error('errror ejecutandose')

    res.send('logger ejecutado')
})






module.exports = router