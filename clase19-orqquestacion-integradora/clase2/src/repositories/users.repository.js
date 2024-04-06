class UserRepository {
    constructor(dao){
        this.dao = dao
    }

    getUsers = async () => {
        return await this.dao.get({})
    }
    getUser = async filter => {
        return await this.dao.getBy(filter)
    
    }
    createUser = async (newUser) => await this.dao.create(newUser)
    updateUser = async (uid, userToUpdate) => await this.dao.update(uid, userToUpdate)
    deleteUser = async (uid) => await this.dao.delete(uid)
}

module.exports = UserRepository