const socket = io() // config para poder usar socket del lado del cliente

// socket.emit('message', 'hola como estas server')

// socket.on('solo-para-el-actual', data => {
//     console.log(data)
// })
// socket.on('para-todos-menos-el-actal', data => {
//     console.log(data)
// })
socket.on('para-todos', data => {
    console.log(data)
})
