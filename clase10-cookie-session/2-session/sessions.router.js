const { Router } = require('express')
const { UserModel } = require('../models/user.model')

const router = Router()

// const products = [
//     {title: 'Gorra rosa',  price: 400, imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg', category:'gorras'},
//     {title: 'Gorra rosa',  price: 350, imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg', category:'gorras'},
//     {title: 'Gorra rosa',  price: 300, imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg', category:'gorras'},
//     {title: 'Gorra rosa',  price: 200, imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg', category:'gorras'},
//     {title: 'Gorra rosa',  price: 150, imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg', category:'gorras'}
// ]

// router.get('/', async (req, res)=>{    
//     let testUser = {
//         name: 'Federico',
//         last_name: 'Osandón',
//         role: 'admin',
//     }
    

    // req.session.user = testUser.name
    // req.session.admin = true

//     res.status(200).render('index', {
//         user: testUser,
//         isAdmin: testUser.role==='admin',
//         products,
//         style: 'index.css'
//     })
// })


router.post('/login', async (req, res)=>{
    const {email, password} = req.body
     console.log(email, password)
    // encripar la contraseña que viene del formulario, comparar con la encriptada de la base de datos
    const user = await UserModel.findOne({email, password})

    if (!user) return res.status(401).send({status: 'error', message: 'Usuario o contraseña incorrectos'})
    
    req.session.user = {
        name: `${user.first_name} ${user.last_name}`,
        email: user.email
    }

    res.status(200).send({
        status: 'success',
        payload: req.session.user,
        message: 'Login correcto',
    })
})



router.post('/register', async (req, res)=>{ // con basae de datos
    const { first_name, last_name, email, password } = req.body

    // pregintar si existe el usuario
    const exists = await UserModel.findOne({email})

    if (exists) return res.status(401).send({status: 'error', message: 'El usuario ya existe'})

    // crear el usuario
    // const user = new UserModel({
    //     first_name,
    //     last_name,
    //     email,
    //     password,
    // })
    // // guardar el usuario
    // await user.save()

    // otra forma de crear el usuario
    const user = {
        first_name,
        last_name,
        email,
        password// lo vamos a ver la clase que viene
    }
    let result = await UserModel.create(user)

    res.status(200).json({
        status: 'success',
        message: 'Usuario creado correctamente'
    })
})

router.get('/logout', async (req, res)=>{
    // session.destroy()
    req.session.destroy(err => {
        if(err) return res.send({status:'Logout error', message: err})           
    })
    res.status(200).redirect('/login')
})

module.exports = router
// export default router

// npm i express express-handlebars socket.io