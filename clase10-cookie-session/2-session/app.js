// const express = require('express')
const express = require('express')
const cookieParser = require('cookie-parser')
const handlebars = require('express-handlebars')
const logger = require('morgan')
// session_______________________________________________________________
const session = require('express-session')
const FileStore = require('session-file-store')
const MongoStore = require('connect-mongo')

const usersRouter = require('./routes/users.router.js')
const productsRouter = require('./routes/productos.router.js')
const sessionsRouter = require('./routes/auth.router.js')
// const { uploader } = require('./utils.js')
// handlebars_______________________________________________________________
const { uploader } = require('./utils/multerConfig.js')
// socket io _______________________________________________________________
const { Server } = require('socket.io')
const { dbConnection } = require('./config/conectionDb.js')
const { auth } = require('./middleware/auth.js')
// socket io _______________________________________________________________
require('dotenv').config()


const app = express()

// __________________________________________________________________
dbConnection()

const PORT = 8080 || process.env.PORT 

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))
app.use(cookieParser())

// session_______________________________________________________________
const fileStore = FileStore(session)

app.use(session({
    store: new fileStore({
        path: './sessions',
        ttl: 100, // milisegundos 
        retries: 0,
    }),


    secret: 's3cr3t0',
    resave: true,
    saveUninitialized: true,
}))
// El campo saveUninitialized se utiliza para controlar si se deben almacenar 
// sesiones nuevas e inactivas en el almacenamiento de sesión, 
// mientras que el campo resave se utiliza para controlar si se debe volver a guardar la sesión 
// incluso si no ha habido cambios en ella.
//  Ambos campos son opcionales y tienen valores predeterminados, 
//  pero pueden personalizarse para adaptarse a las necesidades específicas de la aplicación.

// session mongo_______________________________________________________________
// app.use(session({
//     store: MongoStore.create({
//         mongoUrl: 'mongodb://localhost:27017/comision32270',
//         mongoOptions: {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         },
//         ttl: 15000000000
//     }), 
//     secret: 's3cr3t0',
//     resave: false,
//     saveUninitialized: false,
// }))

app.use('/virtual' ,express.static(__dirname+'/public'))

// handlebars_______________________________________________________________
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')
// handlebars_______________________________________________________________


app.use('/', sessionsRouter)

// http://localhost:8080/api/usuarios
app.use('/api/usuarios', auth, usersRouter)

// http://localhost:8080/api/productos
app.use('/api/productos', auth,productsRouter)

app.post('/single', uploader.single('myfile') ,(req, res)=>{
    res.status(200).json({
        mensaje: 'se a subido con éxito el archivo'
    })
})

app.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).send('Todo mal')
})

const httpServer = app.listen(PORT,err =>{
    if (err)  console.log(err)
    console.log(`Escuchando en el puerto ${httpServer.address().port }`)
})

// instanciando socket
const io = new Server(httpServer)


const mensajes = [
    // {user: 'Fede', message: 'Hola como están'}
]
let connectedClients = []

io.on('connection', socket => {
    // console.log('Nuevo cliente conectado')
    connectedClients.push(socket)
    console.log(`Cliente conectado. Total de clientes conectados: ${connectedClients.length}`)

    socket.on('message', data => {
        console.log('message',data)
        mensajes.push(data)
        io.emit('messageLogs', mensajes)
        // persisti 
    })

    socket.on('authenticated', data => {
        
        socket.broadcast.emit('newUserConnected', data)
    })
    
    socket.on('disconnect',()=>{
        connectedClients = connectedClients.filter((client) => client !== socket)
        console.log(`Cliente desconectado. Total de clientes conectados: ${connectedClients.length}`)
    })
})

