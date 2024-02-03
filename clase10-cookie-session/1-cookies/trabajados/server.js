
// archivos importados de la clase
// cookie
const cookieParser = require('cookie-parser')
// session
const session = require('express-session')

const app = express()


app.use(cookieParser('p@L@BR@s3CR3T@'))
// middleware de session
app.use(session({
    secret: 'p@L@BR@s3CR3T@',
    resave: true,
    saveUninitialized: true
}))



//_______________________________

app.use('/pruebas', pruebasRouter)


