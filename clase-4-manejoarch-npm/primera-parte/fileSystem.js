// const fs = require('fs')

// sincrónica de manejos de archivos________________________________________________________
// console.log(fs.existsSync('./data.txt'))
// fs.writeFileSync('./data.txt', 'Esto es un ejemplo', 'utf-8')
// fs.appendFileSync('./data.txt', '\n ESto es un agregado de ejempló', 'utf-8')
// const file = fs.readFileSync('./data.txt','utf-8' )
// console.log(file)
// fs.unlinkSync('./data.txt')

// cb______________________________________________________________________________________

// fs.writeFileSync() // sincrónico
// fs.writeFile('./data.txt', 'hola esto es un ejemplo', 'utf-8', (err) => {
//     if (err) return console.log('Error al escribir un archivo', err)
//     // console.log(resultado)
// })

// fs.readFile('./data.txt', 'utf-8', (err, data)=>{
//     if (err) return console.log('ERrror', err)
//     console.log(data)
// })

// fs.appendFile('./data.txt', 'esto es un agregado', 'utf-8', error => {
//     if (error) {
//         return console.log('esto es un error', error)
//     }

//     fs.readFile('./data.txt', 'utf-8', (err, data)=>{
//         if (err) return console.log('ERrror', err)
//         console.log(data)
//         fs.watchFile(, {
//             fs.
//         })
//     })
// })

// fs.unlink('./data.txt', err => {
//     if (err) {
//         console.log('Esto es un erro', err)
//     }
//     console.log('archivo borrado')
// })

// promesas __________________________________________________________________________
const { promises: fs } = require('fs')


// fs.promises.writeFile('./data.txt', 'ESto es un ejemplo', 'utf-8')
// .then(()=> console.log('terminé de escribir el archivo'))
// .catch(err => console.log(err))

// fs.readFile('./data.txt', 'utf-8')
// .then(data => console.log(data))
// .catch(err => console.log(err))

// const readData = async () => {
//     try {
//         const file = await fs.readFile('./data.txt', 'utf-8')
//         console.log(file)
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// readData()

const users = [
    {id: 1, first_name: 'Fede', last_name: 'Osandón', email: 'f@gmail.com'}
]
const handleFiles = async ( ) => {
    // let userJson = JSON.stringify(users)
    try {
        let usersJson = JSON.stringify(users, null, 2)
        let usersJs   = JSON.parse(usersJson) 
        console.log(usersJs)
        await fs.writeFile('./data.json', usersJson, 'utf-8')
        const data = await fs.readFile('data.json')
        const dataJS = JSON.parse(data)
        console.log('ESto es data', dataJS)
        await fs.unlink('./data.txt')
    } catch (error) {
        console.log(error)
    }
}
handleFiles()
