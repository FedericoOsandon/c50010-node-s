// const array =[1,2,3]

// array.map( function(num){
//     return num * 2
// } )

{/* <button onClick={()=>{}}></button> */}

// let newArray = array.map((num, index)=>{
//     return num * index
// })
// console.log(newArray)

let arreglo = [1,2,3,4,5,6]

// function miMap(array, callback) {
//     let nuevoArray = []
//     for (let i = 0; i < array.length; i++) {
//         let nuevoValor = callback(array[i])
//         nuevoArray.push(nuevoValor)       
//     }
//     return nuevoArray
// }
// let newArray = miMap(arreglo,  cb)
// console.log(newArray)

Array.prototype.miMap = function(callback){
    let nuevoArray = []
    for (let i = 0; i < this.length; i++) {
        let nuevoValor = callback(this[i])
        nuevoArray.push(nuevoValor)       
    }
    return nuevoArray
}
// let cb = num => num * 2

console.log( arreglo.miMap(num => num + 2) )