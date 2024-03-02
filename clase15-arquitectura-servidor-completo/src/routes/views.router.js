const { Router } = require('express')

const router = Router()

router.get('/register', async (req, res)=>{
    

    res.render('register')
}) 

router.get('/login', async (req, res)=>{

    res.render('login')
}) 



module.exports = router
