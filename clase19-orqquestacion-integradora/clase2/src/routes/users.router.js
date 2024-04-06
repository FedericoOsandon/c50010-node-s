const { Router } = require('express')
const UserDaoMongo = require('../daos/Mongo/usersDaoMongo')
const UserController = require('../controllers/users.controller')

const router = Router()
const { 
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = new UserController()
router
    .get('/', getUsers)
    .get('/:uid', getUser)
    .post('/', createUser)
    .put('/:uid', updateUser)
    .delete('/:uid', deleteUser)

module.exports = router