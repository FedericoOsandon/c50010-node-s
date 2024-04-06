const UserDaoMongo = require("../daos/Mongo/usersDaoMongo");
const UserRepository = require("./users.repository");

const userService = new UserRepository(new UserDaoMongo())

module.exports = {
    userService
}