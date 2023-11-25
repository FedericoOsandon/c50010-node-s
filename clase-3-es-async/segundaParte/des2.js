const sumar       = (err, num1, num2) => num1 + num2
const restar      = (err, num1, num2) => num1 - num2
const multiplicar = (err, num1, num2) => num1 * num2
const dividir     = (err, num1, num2) => err == null ? num1 / num2 : err

const operacion   = (numero1, numero2, cb)=>{
    if (numero2 === 0) {
        return cb('no se puede dividir por cero', numero1, numero2)        
    }
    // acciones
    return cb(null, numero1, numero2)
}

// console.log( operacion(3, 3, sumar) )
// console.log( operacion(3, 3, restar) )
// console.log( operacion(3, 3, multiplicar) )
console.log( operacion(3, 0, dividir) )