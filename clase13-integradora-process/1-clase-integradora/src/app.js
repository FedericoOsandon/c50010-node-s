import express from "express";
import logger from 'morgan'
import handlebars from 'express-handlebars'
import { __dirname, uploader } from "./utils.js";

import { connectDB } from "./config/config.js";
import appRouter from './routes/index.js'

// integradora dos
import cookieParser from "cookie-parser"
import passport from "passport"
import { initializePassport } from "./config/initializePassport.config.js";


const app  = express()
const PORT = 8080 
connectDB()

app.use(express.json())
app.use(express.urlencoded({extends: true}))
app.use(cookieParser())
app.use(logger('dev'))

initializePassport()
app.use(passport.initialize())

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.post('/file', uploader.single('myFile'),(request, response)=>{
    response.send('imagen subida')
})

app.use(appRouter)

app.listen(PORT, (err) => {
    if(err) console.log(err)
    console.log(`Servidor escuchando en el puerto ${PORT}`)
} )


