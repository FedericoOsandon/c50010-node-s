const { Router } = require('express')
const { userModel } = require('../models/users.model')
const { createHash, isValidPassword } = require('../utils/hashBcrypt')
const passport = require('passport')
const router = Router()

// router.post('/register', async (req, res)=>{
//     const {first_name, last_name, email, password } = req.body
//    //validar datos - requeridos
//     const userNew = {
//         first_name,
//         last_name,
//         email,
//         password: createHash(password)
//     }

//     const result = await userModel.create(userNew)

//     res.status(200).send({
//         status: 'success',
//         usersCreate: result
//     })
// }) 

// router.post('/login', async (req, res)=>{
//     const { email, password } = req.body
   
//     const user = await userModel.findOne({email})   
    
//     //validar que exista el usuario
    
//     if (!isValidPassword(password,  user.password)) return res.status(401).send('no coincide las credenciales')

//     res.status(200).send({
//         status: 'success',
//         usersCreate: 'login success'
//     })
// }) //POST  http://localhost:8080/users


router.post('/register', passport.authenticate('register', {failureRedirect: '/api/sessions/failregister'}) ,async (req, res)=>{
    res.send({status: 'success', message: 'user registered'})
})


router.get('/failregister', async (req, res) => {
    res.send({error: 'falla en el register'})
})
router.post('/login', passport.authenticate('login', {failureRedirect: '/api/sessions/faillogin'}) ,async (req, res)=>{
    if (!req.user) return res.status(401).send({status: 'error', error: 'creadential invalid'})
    
    req.session.user = { 
        first_name: req.user.first_name, 
        last_name: req.user.last_name,
        email: req.user.email, 
        id: req.user._id 
    }
    
    res.send({status: 'success', message: req.user})
})


router.get('/faillogin', async (req, res) => {
    res.send({error: 'falla en el register'})
})


router.get('/current', async (req, res) => {
    res.send({message: 'datos sensibles'})
})

module.exports = router
