const { usersModel } = require("./models/users.model")

class UserDaoMongo { // manager User
    constructor() {
        //  iniciar la base de datos
        this.userModel = usersModel
    }

    // getPaginate = async (limit, page)=> await this.userModel.paginate({},{limit, page, lean: true})
   
    get     = async _ => await this.userModel.find({}) // get all
    
    getBy   = async (filter) => await this.userModel.findOne(filter)
    
    create  = async (newUser)=> await this.userModel.create(newUser)
    
    update  = async (uid, userUpdate) => await this.userModel.findOneAndUpdate({_id: uid}, userUpdate)

    delete  = async (uid) => await this.userModel.findOneAndDelete({_id: uid})

}
    
module.exports = UserDaoMongo
    