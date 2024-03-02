const express = require('express')
const handlebars  = require('express-handlebars')
const { Server: ServerIO, Server }  = require('socket.io') 
const appRouter = require('./routes')
const { messageSocket } = require('./utils/messageSocket.js')
const {  configObject } = require('./config/connectDB.js')
const { initializePassport } = require('./config/passport.config.js')
const cookieParser = require('cookie-parser')

const cors = require('cors')

const passport = require('passport')


const app  = express()
const PORT = configObject.port 


app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())

initializePassport()
app.use(passport.initialize())

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

app.use(appRouter)

const httpServer =  app.listen(PORT, ()=>{
    console.log('Escuchando en el puerto: ' + PORT)
})
// socket del lado del server
const io = new ServerIO(httpServer)
messageSocket(io)





