const express = require('express')
const usersRouter = require('./routes/users.router.js')
const cartsRouter = require('./routes/carts.router.js')
const handlebars  = require('express-handlebars')
const { Server: ServerIO, Server }  = require('socket.io') 

const app = express()


app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

// http://localhost:8080 /
app.get('/', (req,res)=>{
    res.render('index', {} )
})
app.use('/api/users',    usersRouter)
app.use('/api/carts',    cartsRouter)
// app.use('/api/products', ()=>{})


const httpServer =  app.listen(8080, ()=>{
    console.log('Escuchando en el puerto 8080')
})
// socket del lado del server
const io = new ServerIO(httpServer)

let mensajes = []

io.on('connection', socket =>{
    console.log('cliente conectado')
    // io.emit('')
    socket.on('message', data => {
        console.log(data)
        mensajes.push(data)

        io.emit('messageLogs', mensajes)
    })
    
})
