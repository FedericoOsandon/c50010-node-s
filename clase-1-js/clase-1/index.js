// console.log('hola fede')
// console.log(true)
// console.log(321)

// console.log('hola')
// console.warn('hola fede')
// console.error('hola fede')
// console.table([{id: '1', nombre:'fede'}, {id: '2', nombre:'fede1'}])

// Tipo de datos

// var nombre = 'fede'
// nombre = 321
// console.log(nombre)
// 2 tipos de datos:  primitivos - Object 

// 1- primitivos 
    // Number
    // boolean
    // string 
    // null 
    // undefined
// 2- object
    // objetos 
    // array
    // function
// variable espacio en memoria <- tipo de datos

// const personas = []
// personas.find( ()=>{} )

// 

// var nombre = 'fede'
// nombre = 321
// console.log(nombre)

// const Y let en cuenta de var


// const persona = {
//     nombre: 'fede'
// }
// persona.nombre = 'juan'

// {
    
//     // limite de uso de nombre es el bloque
//     // let nombre = 'fede'
//     // nombre = 'juan'
//     console.log(persona.nombre)
// }

// funciones 

// function suma () {
//     return 2 + 3
    
// }

// const suma = function(params){
//     return 2 + 3
// }

// const suma = numero1 => {
//     return numero1 
// }
// const suma = _ => {
//     return 'suma'
// }

// const suma = (numero1, numero2) => numero1 + numero2
// let resultSuma

// const suma = (numero1, numero2) => {

//     resultSuma = numero1 + numero2
   
//     // return 'El resultado es: ' + resultSuma + ', hasta la próxima'
//     return `El resultado es: ${resultSuma}, hasta la próxima.`
// }



// console.log(suma(2, 3))
// clousure
// function crearContador() {

//     let contador = 0

//     return () => {
//         contador++
//         console.log(contador)
//     }

// }

// let miContador = crearContador()

// miContador()
// miContador()
// miContador()

// clases _______________________________________________________________________

const personas = []
// literales
// const persona1 = {
//     nombre: 'Fede',
//     apellido: 'Osandón',
//     email: 'f@gmail.com'
// }
// const persona2 = {
//     nombre: 'Juan',
//     apellido: 'Pérez',
//     email: 'j@gmail.com'
// }
// const persona3 = {
//     nombre: 'Lucas',
//     apellido: 'Gonzales',
//     email: 'l@gmail.com'
// }

// function Persona() {
    
// }

class Persona {
    constructor(nombre, apellido, email){
        this.nombre   = nombre
        this.apellido = apellido
        this.email    = email
    }
    static especie =  'humana'

    emitirSaludo = () => {
        return `Hola mi nombre es: ${this.nombre}, y mi apellido es:  ${this.apellido}`
    }

    static pegarGrito(){
        return 'Haaaaaaaaaaaaaaaaaaaa'
    }

} // molde constuir objetos (instanciar)

const persona1 = new Persona('Fede', 'Osandón', 'f@gmail.com')
const persona2 = new Persona('Juan', 'Pérez', 'j@gmail.com')

console.log(persona1.emitirSaludo())
console.log(persona2.emitirSaludo())
console.log(Persona.pegarGrito())
console.log(Date.now())


