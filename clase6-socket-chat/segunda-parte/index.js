const socket = io() // config para poder usar socket del lado del cliente
let user

Swal.fire({
    title: 'Identifícate',
    input: 'text',
    text: 'Ingresá el usuario para identificarte en el chat',
    inputValidator: value =>{
        return !value && 'Necesitas ingresar el nombre de usuario para continuar..'
    },
    allowOutsideClick: false
}).then( result =>  {
    user=result.value
    console.log(user)
})

// const chatbox = document.getElementById('chatbox')
const chatbox = document.querySelector('#chatbox')
chatbox.addEventListener('keyup', (evt)=>{
    if(evt.key === 'Enter'){
        if(chatbox.value.trim().length > 0){
            socket.emit('message', { user, message: chatbox.value })
            chatbox.value = ''
        }
    }
})

socket.on('messageLogs', data => {
    // console.log(data)
    let messageLogs = document.querySelector('#messageLogs')
    let mensajes = ''
    data.forEach(mensaje => {
       mensajes += `<li>${mensaje.user} dice: ${mensaje.message}</li>` 
    })
    messageLogs.innerHTML = mensajes
})




   