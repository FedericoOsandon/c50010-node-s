const {Router} = require('express')
const { fork } = require('child_process')
const { sendMail } = require('../../utils/sendEmail.js')
const { faker } = require('@faker-js/faker')

const router = Router()

const generateProducts = () => {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        departament: faker.commerce.department(),
        stock: parseInt(faker.string.numeric()),
        desciption: faker.commerce.productDescription(),
        id: faker.database.mongodbObjectId(),
        image: faker.image.url()
    }
}

const generateUser = () => {
    let numberOfProducts = parseInt(faker.string.numeric(1, { bannedDigits: ['0']}))
    let products = []

    for (let i = 0; i < numberOfProducts; i++) {
        products.push(generateProducts())
        
    }
    return {
        id: faker.database.mongodbObjectId(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        sex: faker.person.sex(),
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number(),
        image: faker.image.avatar(),
        email: faker.internet.email(),
        products     
    }
}


router.get('/users', (req, res) => {
    let users = []
    for (let i = 0; i < 100; i++) {
        users.push(generateUser())        
    }
    res.send({
        status: '',
        payload: users
    })
})    



// router.get('/mail', (req, res) => {    
//     const destinatario = 'projectodigitalgen@gmail.com'
//     const subject = 'Email de prueba ecommer Coder'
//     const html = '<div><h1>Este es un mail de prueba</h1></div>'

//     sendMail(destinatario, subject, html)
    
//     res.send('email enviado')
// })

// router.get('/sms', (req, res) => {    
    

//     sendSms('Federico', 'Osandón')

//     res.send('sms enviado')
// })








// const operacionCompleja = () => {
//     let result = 0

//     for (let i = 0; i < 7e9; i++) {
//         result += i        
//     }

//     return result
// }

// router.get('/block', (req, res) => {
//     const result = operacionCompleja()

//     res.send({result})

// })


// router.get('/noblock', (req, res) => {
//     const child = fork('./src/routes/operacionCompleja.js')

//     child.send('Icicializa el cálculo por favor')

//     child.on('message', result => {
//         res.send({result})        
//     })


// })



















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