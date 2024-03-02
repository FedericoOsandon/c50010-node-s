const { Router } = require('express')
const UserController = require('../controllers/users.controller')

const router = Router()

const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = new UserController()

router.get('/',        getUsers )
router.get('/:uid',    getUser) 
router.post('/',       createUser) 
router.put('/:uid',    updateUser) 
router.delete('/:uid', deleteUser)

module.exports = router
