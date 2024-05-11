const express = require('express' )
const mongoose = require('mongoose' )
const cookieParser = require('cookie-parser' )

const usersRouter = require('./routes/users.router.js' )
const petsRouter = require('./routes/pets.router.js' )
const adoptionsRouter = require('./routes/adoption.router.js' )
const sessionsRouter = require('./routes/sessions.router.js')

const swaggerJsDocs = require('swagger-jsdoc')
const swaggerUiExpress = require('swagger-ui-express')


const app = express() 
const PORT = process.env.PORT||8080 
const connection = mongoose.connect(`mongodb://127.0.0.1:27017/c50010`)

app.use(express.json())
app.use(cookieParser())

// sweagger config -> documentación
const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación de app Adoptame',
            description: 'Descripción de nuestra app Adoptame'
        }
    },
    apis: [`${__dirname}/docs/**/*.yaml`]
} 

const specs = swaggerJsDocs(swaggerOptions)
app.use('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))

app.use('/api/users',usersRouter) 
app.use('/api/pets',petsRouter) 
app.use('/api/adoptions',adoptionsRouter) 
app.use('/api/sessions',sessionsRouter) 

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
