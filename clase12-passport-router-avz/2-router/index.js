const { Router } = require('express')
// const usersRouter = require('./users.router.js')
const cartsRouter = require('./carts.router.js')
const sessionsRouter = require('./sessions.router.js')
const viewsRouter = require('./views.router.js')
const pruebasRouter = require('./pruebas.router.js')
const UserRouter = require('./usersClass.router.js')

const router = Router()
const usersRouter = new UserRouter()

router.use('/api/users', usersRouter.getRouter())


router.use('/', viewsRouter)
router.use('/pruebas', pruebasRouter)
router.use('/api/sessions', sessionsRouter)
// router.use('/api/users', usersRouter)
router.use('/api/carts', cartsRouter)

router.get('*', (req, res)=>{
    res.send('not found')
})

module.exports = router