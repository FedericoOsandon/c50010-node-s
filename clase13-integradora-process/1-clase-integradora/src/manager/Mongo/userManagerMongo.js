import { userModel } from "../../models/user.model.js"


class UserManagerMongo {
    async getUsers(){
        return await userModel.find({})
    }
    async getUser(filter){
        return await userModel.findOne(filter)
    }
    async createUser(userNew){
        
        return await userModel.create(userNew)
    }
    async updateUser(){}
    async deleteUser(){}
}

export default UserManagerMongo
