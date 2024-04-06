const { Command } = require('commander')

const program = new Command

program
    .option('--mode <mode>', 'Mode es el tipo de ejecución de nuestra app', 'development')
    .parse()


module.exports = {
    program
}