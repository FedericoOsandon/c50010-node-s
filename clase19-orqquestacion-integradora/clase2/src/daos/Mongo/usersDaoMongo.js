const { userModel } = require("./models/users.model")

class UserDaoMongo {
    constructor(){
        this.model = userModel
    }

    async get(){
        return await this.model.find({})           
    }

    async getBy(filter){
        return await this.model.findOne(filter)
    }

    async create(newUser){
        return await this.model.create(newUser)
    }
    
    async update(uid, userToUpdate){
        return await this.model.findOneAndUpdate({_id: uid}, userToUpdate)
    }

    async delete(uid){
        return await this.model.findByIdAndDelete({_id: uid})
    }
}

module.exports = UserDaoMongo