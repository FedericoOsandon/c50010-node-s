const express = require('express')

const app = express()

// http:// localhost:8000 /
app.get('/', (req, res)=> {
    console.log(req)
    res.send('Bienvenidos a mi primer server express') 
})
// http:// localhost:8000 /saludo
app.get('/saludo', (req, res)=> {
    res.send('<h1>Bienvenidos saludo</h1>') 
})
// http:// localhost:8000 /users
app.get('/users', (req, res)=> {
    res.send({
        nombre: 'Federico',
        apellido: 'Osandón'
    }) 
})

app.listen(8080, ()=>{
    console.log('Escuchando en el puerto 8000')
} )