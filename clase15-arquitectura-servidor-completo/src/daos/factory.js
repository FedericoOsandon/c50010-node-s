const { configObject, connectBD } = require("../config/connectDB");




let UserDao
let ProductDao
let CartsDao


// persistence MONGO
switch (configObject.persistence) {
    case 'FILE':
        const UserDaoFile = require("./File/userManagerFile")
        UserDao = UserDaoFile


        break;
    case 'MEMORY':
        
        break;

    default:
        // la linea de abajo es para import from
        // const UserDaoMongo = (async import('./Mongo/usersDao.mongo')).default
        connectBD()

        const UserDaoMongo = require("./Mongo/usersDao.mongo")
        UserDao = UserDaoMongo

        const ProductDaoMongo = require("./Mongo/productsDao.mongo")
        ProductDao = ProductDaoMongo

        break;
}

module.exports = {
    UserDao,
    ProductDao
}