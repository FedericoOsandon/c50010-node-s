// ES 7/
const array = [1,2,3,4,5,6]

const valorPotencia = array.map(numero => numero ** 2)
console.log(valorPotencia)

console.log(array.includes(7))

// ES8/

    // async await swgar syntax de promesa
    // Promise
    
    // const impuestos = {
    //     impuesto1: 234,
    //     impuesto2: 341,
    //     impuesto3: 4611,
    //     impuesto4: 111
    // }

    // let result = Object.entries(impuestos)
    // let result = Object.keys(impuestos)
    // let result = Object.values(impuestos)

    // console.log(result)

    // javascript ES9
    // Promesas finally .then().catch.finally()
    // rest operator spread operator

    const objet1 = {
        propiedad1: 1,
        propiedad2: 'b',
        propiedad3: true
    }
    const objet2 = {
        propiedad1: 'c',
        propiedad2: [1,2,3]
    }

    // desctructuring 

    // const propiedad1 = objet1.propiedad1
    // const propiedad2 = objet2.propiedad2

    // const { propiedad1 , propiedad3, propiedad5=5 } = objet1
    // const { propiedad2 } = objet2

    // console.log(propiedad1)

    const objet3 = { ...objet2, ...objet1 }
    console.log(objet3)





