const {Command } = require('commander')

const program = new Command()

program
    .option('--mode <mode>', 'especificación de entorno', 'production')
    .parse()


module.exports = { program }