// let nombre = '  fede es el mejor          '


// console.log(nombre.trim())

// const array = [1,2, [3,4], 5,6 ,[ [7,[8]], 9]]

// console.log(array.flat(3))

/// import dynamics

const modo = 'calculos'

const exampleImportDynamic = async () =>{
    if (modo === 'calculos') {
        const { Calculadora }  = await import('./Calculadora.mjs')
        let calculadors = new Calculadora()
        console.log(calculadors.suma(1,3))
    }
}

exampleImportDynamic()