const UserMongoManager = require("../daos/Mongo/usersDao.mongo")
const { userService } = require("../repositories")
const { CustomError } = require("../utils/errors/customError")
const { EErrors } = require("../utils/errors/enums")
const { generateUserErrorInfo } = require("../utils/errors/info")

class UserController {
    constructor(){
        this.service = userService 
    }

    getUsers = async (req, res)=>{  
        try {
            const users = await this.service.getUsers()
            console.log(users)
            res.send(users)
        } catch (error) {
            res.send({status: 'error', message: error})
            
        }    
    }
    
    getUser = async (req, res)=>{
        const { uid } = req.params
        const user = await this.service.getUser({_id: uid})
    
        // console.log(req.params)
    
        res.send(user)
    }
    
    createUser = async (req, res, next)=>{
        try {
            const {first_name, last_name, email, password } = req.body

            if(!first_name || !last_name || !email) {
                CustomError.createError({
                    name: "User creation error",
                    cause: generateUserErrorInfo({
                        first_name,
                        last_name,
                        email
                    }),
                    message: 'Error truing to created user',
                    code: EErrors.INVALID_TYPE_ERROR
                })
            }

            // validar si existi
           
            const newUser = {
                first_name,
                last_name,
                email,
                password
            }
            // console.log(newUser)
        
            const result = await this.service.createUser(newUser)
        
            res.status(200).send({
                status: 'success',
                usersCreate: result
            })
        } catch (error) {
            next(error)
        }
       
    }
    
    updateUser =  async (req, res)=>{
        const {uid} = req.params
        const userToUpdate = req.body
    
        const result = await this.service.updateUser(uid, userToUpdate)
    
        res.status(200).send({
            status: 'success',
            message: result
        })
    }
    
    deleteUser =  async (req, res)=>{
        const { uid } = req.params
        const result = await this.service.deleteUser( uid)
        res.send(result)
    }
}

module.exports = UserController




// npm 
// yarn 

// pnpm
// bun 