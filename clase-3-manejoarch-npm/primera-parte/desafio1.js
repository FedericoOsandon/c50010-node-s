const { promises } = require('fs')
const fs = promises

// leer package.json
const leerArch = async () => {
    try {
        const dataJson = await fs.readFile('./package.json')
        const contenidoObjeto = JSON.parse(dataJson)
        contenidoObjeto.author = 'Federico Osandón'
        console.log(contenidoObjeto)
        const contenidoStr = JSON.stringify(contenidoObjeto, null, 2)
        console.log(contenidoStr)
        await fs.writeFile('./package.json', contenidoStr)
    } catch (error) {
        console.log(error)
    }
}
leerArch()