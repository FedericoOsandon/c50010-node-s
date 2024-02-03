const {Router} = require('express')

const router = Router()

router.get('/login', (req, res)=>{
    res.status(200).render('login')
})

router.get('/register', (req, res)=>{
    res.status(200).render('register')
})

module.exports = router