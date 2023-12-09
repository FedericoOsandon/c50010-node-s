const http = require('node:http')


// VERBO http://  localhost:8080  /
const server = http.createServer((peticion, respuesta)=>{
    respuesta.end('Mio primer server con hola mundo')
}) // 

server.listen(8080, ()=>{
    console.log('Server corriendo en el puerto 8080')
})