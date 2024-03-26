const {Router} = require('express')
const { fork } = require('child_process')
const { sendMail } = require('../../utils/sendEmail.js')
const { faker } = require('@faker-js/faker')
const compression = require('express-compression')
const router = Router()



// router.get('/logger', (req, res) => {
//     req.logger.warning('warning ejecutandose')
//     // req.logger.error('errror ejecutandose')

//     res.send('logger ejecutado')
// })

router.get('/testuser', (req, res) => { 
    const user = {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(), 
        password: faker.internet.password() 
    }

    res.send(user)
})



router.get('/simple', (req, res) => {
    let sum = 0
    for (let i = 0; i < 1000000; i++) {
        sum += i        
    }
    res.send(`La suma es ${sum}`)
})

router.get('/compleja', (req, res) => {
    let sum = 0
    for (let i = 0; i < 5e8; i++) {
        sum += i        
    }
    res.send(`La suma es ${sum}`)
})

// artillery quick --count 40 --num 50 'http://localhost:8080/pruebas/simple' -o simple.json
// artillery quick --count 40 --num 50 'http://localhost:8080/pruebas/compleja' -o compleja.json
// artillery run config.yaml --output testPerformance.json














// expresiones regulares regex
// %C3%A1 -> á
// %C3%A9
// %C3%AD
// %C3%B3
// %C3%BC
// router.param('parametro', async (req, res, next, parametro)=>{
//     console.log(parametro)
//     next()
// })

// router.get('/:parametro([a-zA-Z%C3%A1%C3%A9]+)', (req, res) => {
//     res.send(req.params.parametro)
// })
// router.get('/:pid([a-zA-Z0-9]+))', (req, res) => {
//     res.send(req.params.parametro)
// })

module.exports = router