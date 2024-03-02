console.log('iniciando un proceso')

process.on('exit', code => {
    console.log('antes de terminar processo: ', code)
})


process.on('uncaughtException', exception => {
    console.log('Atrapa un error error no controlado', exception)
})

// process.on('message', code => { single thread
//     console.log()
// })

// console()
// console.log(fede)

console.log('terminando')