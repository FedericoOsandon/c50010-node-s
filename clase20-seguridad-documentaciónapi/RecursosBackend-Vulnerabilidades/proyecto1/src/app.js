import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();

/* This code snippet is configuring the Express application to use Handlebars as the template engine
for rendering views. Here's a breakdown of each line: */
app.engine('handlebars',handlebars.engine());
app.set('views',`${__dirname}/views`);
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/',viewsRouter)
app.use('/api/sessions',sessionsRouter)
// const PORT = process.env.PORT || '8080'
// env.
app.listen(8080,()=>console.log(`Listening on PORT 8080`))