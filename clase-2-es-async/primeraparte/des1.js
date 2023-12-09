const porductos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]

// let newList = [...Object.keys(objetos[0]),...Object.keys(objetos[1])]

// console.log(newList)
const newList = []
porductos.forEach( objecto => {
	const keys = Object.keys(objecto) 
	keys.forEach(key => {
		if (!newList.includes(key)) newList.push(key)
	})
} )

console.log(newList)



// leandro

const lista = Object.keys(objetos[0])
const lista1 = Object.keys(objetos[1])

const listaComp = lista.concat(lista1)
const listaFin = new Set(listaComp)

console.log(listaFin)