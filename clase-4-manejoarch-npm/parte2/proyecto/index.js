// moment manejos de date / fechas

const moment = require('moment')
const fedchaActual = moment()
console.log(fedchaActual)

let fechaNacimiento = moment('2004-04-27', 'YYYY-MM-DD')
console.log(fechaNacimiento)
console.log(fechaNacimiento.isValid())
console.log(fedchaActual.isValid())
if (fechaNacimiento.isValid() && fedchaActual.isValid()) {
    let diferenciaDias = fedchaActual.diff(fechaNacimiento, 'hours')
    console.log(diferenciaDias)
}
