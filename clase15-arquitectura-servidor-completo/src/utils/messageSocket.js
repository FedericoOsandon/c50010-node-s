let mensajes = []
exports.messageSocket = (io) => {
    io.on('connection', async socket =>{
        
        console.log('cliente conectado')
        // io.emit('')
        socket.on('message', data => {
            console.log(data)
            // mensajes.push(data)
    
            // io.emit('messageLogs', mensajes)
        })
        
    })
}