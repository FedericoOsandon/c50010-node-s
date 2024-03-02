const UserMongoManager = require("../daos/Mongo/usersDao.mongo")

const { createHash, isValidPassword } = require('../utils/hashBcrypt')
const passport = require('passport')
const { generateToken, authTokenMiddleware } = require('../utils/jsonwebtoken')

class SessionController {
    constructor(){
        this.userService = new UserMongoManager()
        // this.userService = new UserFileManager()
        // this.userService = new UserMemoryManager()
    }

    register = async (req, res)=>{
        try {
            const {first_name, last_name, email, password } = req.body
        //validar datos - requeridos
            const userNew = {
                first_name,
                last_name,
                email,
                password: createHash(password)
            }
        
            const result = await this.userService.createUser(userNew)
            // no guardar datos sensibles 
        
            const token = generateToken({
                id: result._id
            })
        
            res.cookie('cookieToken', token, {
                maxAge: 60 * 60 * 1000 * 24,
                httpOnly: true
            }).send({
                status: 'success',
                usersCreate: result, 
                token
            })
        } catch (error) {
            res.send({status: 'error', error})
        }
        
    }
    
    login  = async (req, res)=>{
        try {
            const { email, password } = req.body
       
            const user = await this.userService.getUser({email})   
            
            //validar que exista el usuario
            console.log(user, email, password)
            if (!isValidPassword({ password: user.password }, password)) return res.status(401).send('no coincide las credenciales')
        
            const token = generateToken({
                fullname: `${user.first_name} ${user.last_name}`, 
                role: user.role,
                email: user.email
            })
            console.log(token)
            res.cookie('cookieToken', token, {
                maxAge: 60 * 60 * 1000 * 24,
                httpOnly: true
            }).send({
                status: 'success',
                usersCreate: 'login success'
            })
        } catch (error) {
            res.send({status: 'error', error})            
        }       
    }


    current = async (req, res) => {
        try {
            res.send({message: 'datos sensibles'})            
        } catch (error) {
            res.send({status: 'error', error})   
        }
    }


    logout = (req, res) => {}
}

module.exports = SessionController