// const cluster = require('cluster')
// const { cpus } = require('node:os')
const { httpSever } = require("./src/server");



// const numeroDeProcesadores = cpus().length
// console.log(process.pid)
// console.log(cluster.isPrimary) // booleano <- indicando si el processo es el principal
// // console.log(numeroDeProcesadores)


// if(cluster.isPrimary) {
//     console.log('Proceso primario, generando trabajadores')
//     for (let i = 0; i < numeroDeProcesadores; i++) {
//         cluster.fork()       
//     }
//     cluster.on('message', worker => {
//         console.log(`Mensaje recibido de el worker ${worker.process.pid}`)
//     })
// } else {
//     console.log('Al ser un fork, no cuenta como primario. siPrimary false. se creo worker')
//     console.log(`Soy un proceso worker con el id ${process.pid}`)
    httpSever()
// }
