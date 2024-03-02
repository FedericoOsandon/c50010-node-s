const { Router } = require('express')
const SessionController = require('../controllers/sessions.controller')
const { passportCall } = require('../middlewares/passportCall')
const { authorization } = require('../middlewares/authorization.middleware')

const router = Router()
const {
    register,
    login,
    current
} = new SessionController()


router.post('/register', register) 
router.post('/login', login) 
router.get('/current', passportCall('jwt'), authorization('USER') , current)


module.exports = router
