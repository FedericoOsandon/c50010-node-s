import { Router } from 'express'
import UserManagerMongo from '../manager/Mongo/userManagerMongo.js'
import { generateToken } from '../utils/jsonwebtoken.js'
import { createHash, isValidPassword } from '../utils/bcryt.js'


const userService = new UserManagerMongo()

const router = Router()
// login register logout - current
router.post('register', async (req, res)=>{
    const {
        first_name,
        last_name,
        email, 
        password
    } = req.body 

    // validar si estan en la base de datos
    const result = await userService.createUser({
        first_name,
        last_name,
        email,
        password: createHash(password)
    })

    res.send({status: 'success', payload: result})
})
router.post('login', async (req, res)=>{
    const { email, password } = req.body

    const userFoundDB = await userService.getUser( {email} )

    // validar el password
    if ( !isValidPassword(password, {password: userFoundDB}) ) {
        return res.send(401).send('contraseña incorrecta')
    }

    const token = generateToken({id: userFoundDB._id, role: 'user', email})

    res.cookie('cookieToken', token, {
        maxAge: 60*60*1000*24,
        httpOnly: true
    }).send('login')
})
router.post('logout', (req, res)=>{
    res.send('logout')
})



export default router