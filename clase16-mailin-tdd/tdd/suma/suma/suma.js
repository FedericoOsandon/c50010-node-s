// const suma = (numero1, numero2) => {
//     if(!numero1 || !numero2) return 0
//     if(typeof numero1 !== 'number' || typeof numero2 !== 'number') return null

//     let result = numero1  + numero2
//     return result
// }


// const suma = (...numeros) => {
//     // if(!numero1 || !numero2) return 0
//     if(numeros.length === 0) return 0

//     // if(typeof numero1 !== 'number' || typeof numero2 !== 'number') return null
//     let validInput = true
//     for (let i = 0; i < numeros.length && validInput; i++) {
//         if(typeof numeros[i] !== 'number'){
//             validInput = false
//         }        
//     }
//     if(!validInput) return null

//     let result = 0

//     for (let i = 0; i < numeros.length; i++) {
//         result += numeros[i]        
//     }
 
//     return result
// }


let suma = (...numeros) => {
    if(numeros.length === 0) return 0
    if(!numeros.every(numero => typeof numero === 'number')) return null

    return numeros.reduce((sumaTotal, numero) => sumaTotal += numero , 0)
}

let testValidos = 0
let testTotales = 4

console.log('test de la funión suma_______________________________________________________________________________')
console.log('test 1_______________________________________________________________________________')
console.log('test 1, la función debe devolver null si algún parametro es no numérico.')

let resultTest1 = suma('2', 2)
if(resultTest1 === null){
    console.log('Test 1 pasó')
    testValidos++
} else {
    console.log(`Test 1 no ha pasado, se recibio ${typeof resultTest1} pero se esperaba un null`)
}

console.log('test 2_______________________________________________________________________________')
console.log('test 2, la función debe devolver 0 si no se pasaron parametros.')

let resultTest2 = suma()
if(resultTest2 === 0){
    console.log('Test 2 pasó')
    testValidos++
} else {
    console.log(`Test 2  no ha pasado, se recibio ${resultTest2} pero se esperaba un 0`)
}


console.log('test 3_______________________________________________________________________________')
console.log('test 3, la función debe devolver el resultado correcto.')

let resultTest3 = suma(2, 3)
if(resultTest3 === 5){
    console.log('Test 3 pasó')
    testValidos++
} else {
    console.log(`Test 3  no ha pasado, se recibio ${resultTest3} pero se esperaba un 5`)
}
console.log('test 4_______________________________________________________________________________')
console.log('test 4, la función debe devolver la suma de todos los parámetros.')

let resultTest4 = suma(1, 2, 3, 4, 5) // [1,2,3,4,5]
if(resultTest4 === 15){
    console.log('Test 4 pasó')
    testValidos++
} else {
    console.log(`Test 4  no ha pasado, se recibio ${resultTest4} pero se esperaba un 15`)
}

console.log(`test pasados:  ${testValidos} / ${testTotales}`)

// (´2´, 1)= ´2´+1 =  null 
// ( )  = 0
// 2 + 1 = 3
// (1,2,3,4,5,) = 1+2+3+4+5 = 15
