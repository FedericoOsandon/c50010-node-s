const UserMongoManager = require("../daos/Mongo/usersDao.mongo")
const { userService } = require("../repositories")

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
    
    createUser = async (req, res)=>{
        const {first_name, last_name, email, password } = req.body
       
        const newUser = {
            first_name,
            last_name,
            email,
            password
        }
        console.log(newUser)
    
        const result = await this.service.createUser(newUser)
    
        res.status(200).send({
            status: 'success',
            usersCreate: result
        })
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