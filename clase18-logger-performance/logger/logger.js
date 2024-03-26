const winston = require('winston')

// const logger = winston.createLogger({
//     transports: [
//         new winston.transports.Console({level: 'http'}),
//         new winston.transports.File({
//             filename: './errors.log', 
//             level: 'warn'
//         })
//     ]
// })

const levelOptions = {
    levels: {
        fatal: 0,
        error:1,
        warning: 2,
        info: 3,
        debug: 4,
        http: 5
    },
    colors: {
        fatal: 'red',
        error: 'yellow',
        warning: 'yellow',
        info: 'blue',
        debug: 'white',
        http: 'blue'
    }
}
const logger = winston.createLogger({
    levels: levelOptions.levels,
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize({ colors: levelOptions.colors }),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: './errors.log', 
            level: 'warning',
            format: winston.format.simple()
        })
    ]
})

// middleware
const addLogger = (req, res, next) => {
    req.logger = logger
    req.logger.info(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
    next()
} 

module.exports = {
    addLogger,
    logger
}