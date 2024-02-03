const { Router } = require('express')

const router = Router()

router.get('/setcookies', async (req, res) => {

    res.cookie('coderCookie', 'esta es la info de la cookie', {maxAge: 10000000}).send('cookie seteada')
})

// archivo de texto { coderCookie: 'esta es la info de la cookie' }

router.get('/getcookies', (req,res)=>{
    console.log(req.cookies)
    res.send(req.cookies)
})

// Ruta con cookie firmadas
router.get('/setsignedcookies', async (req, res) => {
    
    res.cookie('coderCookie', 'esta es la info de la cookie firmada y poderosa', {maxAge: 10000000, signed: true}).send('cookie seteada')
})

// Ruta con cookie firmadas
router.get('/getsignedcookies', (req,res)=>{
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

router.get('/deletecookies', (req,res)=> {
    res.clearCookie('coderCookie').send('Cookie borradas')
})

router.get('/session', (req,res) => {
    if (req.session.counter) {
        req.session.counter++
        res.send(`Se ha visitado el sitio ${req.session.counter} veces.`)
    } else {
        req.session.counter = 1
        res.send('<h1>BIenvenidos</h1>')
    }
})

router.post('/login', (req,res) => {
    const {email, password} = req.body
    // validando como si buscara los datos en la bd
    if (email !== 'f@gmail.com' || password !== '123456') {
        return res.send('login fallido')
    }

    req.session.user = email 
    req.session.admin = true
    res.send('login success')
})

router.get('/logout', (req,res)=>{
    req.session.destroy(err=> {
        if(err) res.send({status: 'logout error', error: err})
        res.send('logout exitoso')
    })
})

module.exports = router