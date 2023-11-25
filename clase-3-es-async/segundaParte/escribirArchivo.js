const escribirArchivo = (texto, cb) => {
    console.log(texto)
    setTimeout(()=>{
        cb()
    })
}

module.exports =  escribirArchivo 