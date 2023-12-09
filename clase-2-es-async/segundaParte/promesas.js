// const task = new Promise((resulto , rechazado)=>{
//     // acciones 
//     resulto('promesa cumplida o resuleta')
//     // rechazado('500 todo mal, nunca mas le presto')
// })

// task
// .then(result => {
//     // throw new Error('error inventado')
//     console.log(result)
// })
// .catch(promesaRechazada => console.log(promesaRechazada))

// const dividir = (numero1, numero2) => {
//     return new Promise((res, rej)=>{
//         if (numero2 !== 0) {
//             res(numero1/numero2)            
//         } else {
//             rej('no se puede dividir por cero')
//         }
//     })
// }


// dividir(15, 5)
// .then(result => {
//     return result * 10
// })
// .then(resultMultiplicacion  => result * 30)
// .catch(err => console.log(err))


// async await 
// async function ejecutarDividirFunction(){
//     const result = await dividir(15, 5)
// }


const ejecutarDividir = async () => {
    try {
        console.log(result)
        const resultMultiplicacion = result * 10 
        console.log(resultMultiplicacion)
    
        console.log(result * 30 )
        
    } catch (error) {
        console.log(error)
    }
    const result = await dividir(15, 5)

}

// ejecutarDividir()


// 

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)

// soncrónico - bloqueantes 
function funcA(){
    console.log("1")
    funcB() // pausado hasta que funcB termine
    console.log("2")
}

function funcB(){
    console.log("3")
    funcC()
    console.log("4")
}

function funcC(){
    console.log("5")
}

funcA()  // 12345  13542 13425 21345   -  1 3 5 4 2