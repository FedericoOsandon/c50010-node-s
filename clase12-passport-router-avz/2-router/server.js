const express = require('express')
const handlebars  = require('express-handlebars')
const { Server: ServerIO, Server }  = require('socket.io') 
const appRouter = require('./routes')
const { messageSocket } = require('./utils/messageSocket.js')
const { connectBD } = require('./config/connectDB.js')
const { initializePassport } = require('./config/passport.config.js')
const cookieParser = require('cookie-parser')

const passport = require('passport')


const app  = express()
const PORT = 8080 || process.env.PORT 
connectBD()
app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

initializePassport()
app.use(passport.initialize())

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

app.use(appRouter)

const httpServer =  app.listen(PORT, ()=>{
    console.log('Escuchando en el puerto 8080')
})
// socket del lado del server
const io = new ServerIO(httpServer)
messageSocket(io)





