const { Router } = require('express')
const { userModel } = require('../models/users.model')
const { createHash, isValidPassword } = require('../utils/hashBcrypt')
const passport = require('passport')
const { generateToken, authTokenMiddleware } = require('../utils/jsonwebtoken')

const router = Router()

router.post('/register', async (req, res)=>{
    const {first_name, last_name, email, password } = req.body
   //validar datos - requeridos
    const userNew = {
        first_name,
        last_name,
        email,
        password: createHash(password)
    }

    const result = await userModel.create(userNew)
    // no guardar datos sensibles 
   
    const token = generateToken({
        id: result._id
    })

    res.status(200).send({
        status: 'success',
        usersCreate: result, 
        token
    })
}) 

router.post('/login', async (req, res)=>{
    const { email, password } = req.body
   
    const user = await userModel.findOne({email})   
    
    //validar que exista el usuario
    
    if (!isValidPassword(password,  user.password)) return res.status(401).send('no coincide las credenciales')

    const token = generateToken({
        fullname: `${user.first_name} ${user.last_name}`, 
        id: user._id,
        email: user.email
    })

    res.status(200).send({
        status: 'success',
        usersCreate: 'login success',
        token
    })
}) //POST  http://localhost:8080/users


router.get('/current', authTokenMiddleware, async (req, res) => {
    res.send({message: 'datos sensibles'})
})



module.exports = router
