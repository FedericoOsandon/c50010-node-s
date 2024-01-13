import express from "express";
import logger from 'morgan'
import handlebars from 'express-handlebars'
import { __dirname, uploader } from "./utils.js";

import { connectDB } from "./config/config.js";
import appRouter from './routes/index.js'

const app  = express()
const PORT = 8080 
connectDB()

app.use(express.json())
app.use(express.urlencoded({extends: true}))
app.use(logger('dev'))

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


