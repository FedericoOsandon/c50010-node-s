const fs = require('fs')
const crypto = require('crypto')

const path = './files/Usuarios.json' // representa la persistencia datos en archivos


class UserDaoFile {    
    get = async () => {
        try {
            if (fs.existsSync(path)) {
                const data = await fs.promises.readFile(path, 'utf-8');
                // console.log(data);
                const users = JSON.parse(data);
                return users;
            }
            await fs.promises.writeFile(path, '[]', 'utf-8')
            return []
            
        } catch (error) {
            console.log(error)
        }        
    }
    get(){}
    create = async (usuario) => {
        const users =  await this.consultarUsuarios();
        if(users.length===0){
            usuario.id=1;
        }else{
            usuario.id = users[users.length-1].id + 1;
        }
        console.log(usuario)
        usuario.salt = crypto.randomBytes(128).toString('base64')
        // crypto.randomBytes(128).toString('base64')
        // console.log(usuario.contrasena)
        usuario.password = crypto.createHmac('sha256', usuario.salt).update(usuario.contrasena).digest('hex')
        
        console.log(usuario)
        // crypto.createHmac('sha256', 'palabraSecreta').update(users.contrasena).digest('hex')
        users.push(usuario);
        await fs.promises.writeFile(path,JSON.stringify(users,null,'\t'));
        return usuario;
    }
    update(){}
    delete(){}


    validarUsuario = async(nombre,contrasena) =>{
        //leyendo el archivo
        const usuarios = await this.consultarUsuarios();

        const usuarioIndex = usuarios.findIndex(u=>u.nombre===nombre)

        if(usuarioIndex===-1) {
            console.log("error, usuario no encontrado");
            return;
        }
        const usuario = usuarios[usuarioIndex];
        const newHash = crypto.createHmac('sha256',usuario.salt).update(contrasena).digest('hex');
        //Ya que no podemos "descifrar" la contraseña original del usuario, tenemos que hashear el intento
        //de contraseña y compararla con la contraseña que tenga guardada el usuario.
        //Nota entonces que, validar una contraseña no es descifrar la contraseña guardada, sino comparar con la contraseña ingresada
        
        if(newHash===usuario.password){
            console.log("Logueado");
        }else{
            console.log("Contraseña inválida");
        }
    }
}

module.exports =  UserDaoFile


// crypto.createHash(algoritmo):
// Crea y devuelve un nuevo objeto hash, un hash criptográfico con el algoritmo dado que puede ser usado para generar el hash digests.
// algorithm depende de los algoritmos disponibles en la versión de OpenSSL en el sistema. 
// Algunos ejemplos son 'sha1', 'md5', 'sha256', 'sha512', etc. En versiones recientes, openssl list-message-digest-algorithms mostrará 
// los algoritmos digest disponibles.


// hash.update(datos)#
// Actualiza el contenido del hash con el data dado. the encoding of which is given in input_encoding and can be 'utf8', 'ascii' or 'binary'. Defaults to 'binary'. Esto puede ser invocado muchas veces con dato nuevo mientras estos van llegando.

// hash.digest([codificación])#
// Calcula el digest todos los datos que van al hash. La codificación (encoding) puede ser 'hex', 'binary' o 'base64'. Por omisíón es 'binary'.

// Nota: hashel objeto no se puede usar después de digest()llamar al método.