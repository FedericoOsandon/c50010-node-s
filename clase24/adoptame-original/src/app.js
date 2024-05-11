const express = require('express' )
const mongoose = require('mongoose' )
const cookieParser = require('cookie-parser' )
const usersRouter = require('./routes/users.router.js' )
const petsRouter = require('./routes/pets.router.js' )
const adoptionsRouter = require('./routes/adoption.router.js' )
const sessionsRouter = require('./routes/sessions.router.js')
const paymentRouter = require('./routes/payments.router.js')
const cors = require('cors')
// importaciones de swagger 
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUiExpress = require('swagger-ui-express')

require('dotenv').config()

const app = express() 
// asignado por el server
const PORT = process.env.PORT||8080 

const connection = mongoose.connect(process.env.MONGO_URL)

app.use(express.json())
app.use(cookieParser())
app.use(cors())

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación de app Adoptame',
            description: 'Api Docs para Adoptame'
        }
    },
    apis: [`${__dirname}/docs/**/*.yaml`]
}

const specs = swaggerJsDoc(swaggerOptions)

app.use('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))

/* These lines of code are setting up routes in your Express application. */
// Endpoint para el método de pago
app.use('/api/payments', paymentRouter)
app.use('/api/users',usersRouter) 
app.use('/api/pets',petsRouter) 
app.use('/api/adoptions',adoptionsRouter) 
app.use('/api/sessions',sessionsRouter) 

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
