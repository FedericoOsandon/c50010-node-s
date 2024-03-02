const {Command} = require('commander')


const program = new Command()

program
    .option('-d', 'Variable para debug', false)
    .option('-p, --port <port>', 'puerto en el que se inicia nuestro server', 8080)
    .option('--mode <port>', 'modo de uso de nuestro server', 'production')
    .option('-u <user>', 'Usuario utilizando el server', 'No se a declarado un usuario')
    .parse()

    const {
        d,
        port,
        mode,
        u
    } = program.opts()
console.log('Opciones: ', mode, port)





// cli mongod
// mongod -u federico -p 123456
// -p 8080

// node src/server.js --port 4000