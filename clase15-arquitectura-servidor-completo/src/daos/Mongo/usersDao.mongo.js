const { userModel } = require("./models/users.model") // representa persistencia bd

class UserDaoMongo { // Dao
    constructor(){
        this.modelMongoose = userModel
    }

    get = () => { // consultar usuario
        return this.userModel.find({})
    }
    
    getBy = (filter) => { // leer un usuario
        return this.userModel.findOne(filter)
    }
    create = (newUser) => { // crear usuario
        return this.userModel.create(newUser)
    } 
    update = (uid, userToUpdate) => { // actualizar usuario
        return this.userModel.findByIdAndUpdate({_id: uid}, userToUpdate, {new: true})
    } 
    delete = (uid) => {
        return this.userModel.findByIdAndDelete({_id: uid})
    } 
}

module.exports = UserDaoMongo

// objeto.crearUsuario
// objeto.createuser