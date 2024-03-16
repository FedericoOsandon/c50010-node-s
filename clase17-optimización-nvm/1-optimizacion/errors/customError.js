

class CustomError {
    // creando un método
    static createError({name = 'Error', cause = 'cause', message = 'no declarado', code = 1}){
        let error   = new Error(message)
        error.name  = name
        error.code  = code 
        error.cause = cause
        throw error // va a producir el error
    }
}

module.exports = {
    CustomError
}