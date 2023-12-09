const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// http:// localhost:8000 /parámetro
// app.get('/params/:nombre', (req, res)=> {
//     console.log(req.params)
//     res.send(`Bienvenido ${req.params.nombre}`) 
// })
// // http:// localhost:8000 /parámetro
// app.get('/dosparams/:nombre/:apellido', (req, res)=> {
//     console.log(req.params)
//     res.send(`Bienvenido ${req.params.nombre} ${req.params.apellido}`) 
// })

let users = [
    {id: 1, nombre: 'Federico', apellido: 'Osandón'},
    {id: 2, nombre: 'Juan', apellido: 'Perez'},
    {id: 3, nombre: 'Lucas', apellido: 'Martínes'},
]
// READ _____________________________________________________________________________
// get user -> solicita un usuario 
app.get('/api/users/:uid', (req, res)=>{
    const { uid } = req.params
    const user = users.find(user => user.id === Number(uid))

    // console.log(req.params)

    res.send(user)
}) 

// Endpint para solicitar todos los users GET http://localhost:8080/users ? limit=5
app.get('/users', (req, res)=>{  

    res.send(users)
}) // uid user id

// Create _____________________________________________________________________________
// crear un usuario
app.post('/api/users/', (req, res)=>{
    const {nombre, apellido} = req.body

    if (!nombre || !apellido) {
        return res.status(400).send({
            status: 'error',
            error: 'Faltan llenar campos en el formulario'
        })
    }
    const newUser = {
        id: users.length + 1,
        nombre: nombre,
        apellido: apellido
    }

    users.push(newUser)
    console.log(users)

    res.status(200).send({
        status: 'success',
        usersCreate: newUser
    })
}) //POST  http://localhost:8080/users

// update PUT PATCH _______________________________________________________________________

app.put('/api/users/:uid', (req, res)=>{
    const {uid} = req.params
    const {nombre, apellido} = req.body

    const userUpdateIndex = users.findIndex(user => user.id === parseInt(uid)) // 0 -> 

    users[userUpdateIndex] = { id: users[userUpdateIndex], nombre, apellido}
    console.log(users)

    res.status(200).send({
        status: 'success',
        message: 'Usuario actualizado'
    })
}) 

// DELETE 

app.delete('/api/users/:uid', (req, res)=>{
    const {uid} = req.params
    users = users.filter(user => user.id !== parseInt(uid))
    res.send(users)
})



// http:// localhost:8080/query ? nombre=''&apellido=''
app.get('/query', (req, res)=>{
    const {nombre , apellido} = req.query
    const user = users.find(user => user.nombre === nombre)

    res.status(200).send(user)
})



app.listen(8080, ()=>{
    console.log('Escuchando en el puerto 8080')
} )