// const variableDePrueba = 0

// let prueba1 = variableDePrueba || 'sin valor' 
// let prueba2 = variableDePrueba ?? 'sin valor'

// console.log(prueba1)
// console.log(prueba2)

class Persona {
    #name // privada
    constructor(apellido, email){
        // this.name = name
        this.apellido= apellido
        this.email= email
        this.fullname = this.#name
    }

    #getNombre = () => this.apellido
    getFullName = () => this.#getNombre() + ' osandon'
}

const persona = new Persona('osandon', 'f@gmail.com')
console.log(persona)
console.log(persona.getFullName())
// console.log(persona)