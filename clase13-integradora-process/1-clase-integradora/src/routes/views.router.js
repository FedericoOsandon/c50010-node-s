import {Router} from 'express'

const router = Router()
// authentication
router.get('/login', (resquest, response) => {
    response.render('login', {})
})

router.get('/register', (resquest, response) => {
    response.render('register', {})
})

router.get('/', (resquest, response) => {
    response.render('index', {})
})

export default router