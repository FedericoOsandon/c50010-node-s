const { UserDto } = require("../dto/userDto")

// capa de servicio
class UserRepository {
    constructor(userDao){
        this.dao = userDao
    }

    getUsers =   async () => await this.dao.get()
    getUser =    async (filter) => await this.dao.getBy(filter)
    createUser = async (newUser) => {
        const newUserDto = new UserDto(newUser)
        return await this.dao.create(newUserDto)
    
    }
    updateUser = async (uid, userToUpdate) => await this.dao.update(uid, userToUpdate)
    deleteUser = async (uid) => await this.dao.delete({_id: uid})

}


module.exports = UserRepository