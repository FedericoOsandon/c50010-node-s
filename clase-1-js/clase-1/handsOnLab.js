class Contador {
    constructor(responsable){
        this.responsable = responsable
        this.count       = 0
    }

    static contadorGlobal = 0

    getResponsable = () => {
        return this.responsable
    }

    contar = () => {
        // this.count = this.count + 1 // 
        // this.count += 1
        this.count ++
        this.contadorGlobal++
    }

    getCuentaIndividual = ()=>{
        return this.count
    }
    getCuentaGlobal = ()=>{
        return Contador.contadorGlobal
    }    
}

const constadorFede = new Contador('Fede')
constadorFede.contar()
constadorFede.contar()
console.log(constadorFede.getResponsable())
console.log(constadorFede.getCuentaIndividual())
console.log(constadorFede.getCuentaGlobal())
const constadorJuan = new Contador('Juan')
console.log(constadorJuan.getCuentaIndividual())

