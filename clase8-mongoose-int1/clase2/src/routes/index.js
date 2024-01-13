import { Router } from 'express'
import { usersRouter } from './users.router.js'
import viewsRouter from './views.router.js'

const router = Router()
 
router.use('/', viewsRouter)

router.use('/api/users', usersRouter)
// router.use('/api/proudcts',(request, responses)=>{})
// router.use('/api/carts',(request, responses)=>{})

export default router