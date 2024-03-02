const { Router } = require('express')

const cartsRouter = require('./carts.router.js')
const sessionsRouter = require('./sessions.router.js')
const viewsRouter = require('./views.router.js')
const pruebasRouter = require('./pruebas.router.js')
const usersRouter = require('./users.router.js')
const productsRouter = require('./products.router.js')

const router = Router()

router.use('/', viewsRouter)
router.use('/pruebas', pruebasRouter)
router.use('/api/sessions', sessionsRouter)
router.use('/api/users', usersRouter)
router.use('/api/products', productsRouter)
router.use('/api/carts', cartsRouter)

router.get('*', (req, res)=>{
    res.send('not found')
})

module.exports = router