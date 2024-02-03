const { Router } = require('express')

const passport = require('passport')


const router = Router()

router.post('/register', passport.authenticate('register', {failureRedirect: '/api/sessions/failregister'}) ,async (req, res)=>{
    res.send({status: 'success', message: 'user registered'})
})


router.get('/failregister', async (req, res) => {
    res.send({error: 'falla en el register'})
})
router.post('/login', passport.authenticate('login', {failureRedirect: '/api/sessions/faillogin'}) ,async (req, res)=>{
    if (!req.user) return res.status(401).send({status: 'error', error: 'creadential invalid'})
    
    req.session.user = { 
        first_name: req.user.first_name, 
        last_name: req.user.last_name,
        email: req.user.email, 
        id: req.user._id 
    }
    
    res.send({status: 'success', message: req.user})
})


router.get('/faillogin', async (req, res) => {
    res.send({error: 'falla en el register'})
})


router.get('/github', passport.authenticate('github', {scope:['user:email']}),async (req, res) => {})

router.get('/githubcallback', passport.authenticate('github', {failureRedirect: '/api/sessions/login'} ),async (req, res) => {
    req.session.user = req.user
    res.redirect('/api/users')
})






module.exports = router
