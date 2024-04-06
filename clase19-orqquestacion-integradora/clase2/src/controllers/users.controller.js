const { userService } = require("../repositories")

class UserController {
    constructor(){
        this.service = userService
    }

    getUsers = async (req, res)=>{
        try {
            const users = await userService.getUsers()
            
            res.send({
                status: 'success',
                payload: users
            })
        } catch (error) {
            console.log(error)
        }
    }
    getUser  =  async (req, res)=>{
        res.send('users')
    }
    createUser = async (req, res)=>{
        const newUser = req.body
        // realizar validaciones

        const result = await userService.createUser(newUser)
        res.send({
            status: 'success',
            payload: result
        })
    }
    updateUser = async (req, res)=>{
        res.send('users')
    }
    deleteUser = async (req, res)=>{
        res.send('users')
    }
}

module.exports = UserController