const escribirArchivo = require('./escribirArchivo.js')

console.log('inicion de la ejecución')


escribirArchivo('hola mundo', ()=>{
    console.log('Terminé de escribir el archivo')
})

console.log('fin del proceso de ejecución')