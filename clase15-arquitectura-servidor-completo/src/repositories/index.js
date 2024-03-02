const UserRepository = require("./users.respository")
const ProductRepository = require("./products..respository")
// importación del dao a travez de factory
const { 
    UserDao, 
    ProductDao 
} = require("../daos/factory")


// userSevice es un objeto con todos los métodos de repository
const userService    = new UserRepository(new UserDao())
const productService = new ProductRepository(new ProductDao())

module.exports = {
    userService,
    productService
}