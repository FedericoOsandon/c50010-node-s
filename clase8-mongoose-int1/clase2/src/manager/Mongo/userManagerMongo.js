import userModel from "../../models/user.model";

class UserManagerMongo {
    async getUsers(){
        return await userModel.find({})
    }
    async getUser(uid){
        return await userModel.findOne({_id: uid})
    }
    async createUser(userNew){
        
        return await userModel.create(userNew)
    }
    async updateUser(){}
    async deleteUser(){}
}

export default UserManagerMongo
