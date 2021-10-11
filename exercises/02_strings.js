// *************************
// 02.A

var apellido = 'pellizzari'

console.log(apellido.toUpperCase())

// *************************
// 02.B

var trabajo = 'Asesor Comercial'
var newTrabajo = trabajo.substring(0,5)

console.log(newTrabajo)

// *************************
// 02.C

var empresa = 'Uno Propiedades'
var newEmpresa = empresa.substring(15,12)

console.log(newEmpresa)

// *************************
// 02.D

var estado = 'inconciente'

var newEstado = (estado.substring(0,1).toUpperCase() + estado.substring(1,11).toLowerCase())
console.log(newEstado)

// *************************
// 02.E

var ciudadesArgentinas = 'Santa Teresita';
var newCiudadesArgentinas = ciudadesArgentinas.indexOf(' '[0])

console.log(newCiudadesArgentinas)

// *************************
// 02.F

var verdura = 'zapallo cabutia'
var newVerdura = verdura.substring(0,1).toUpperCase() + verdura.substring(1,verdura.indexOf(' '[0])).toLowerCase() + ' ' +  verdura.substring(((verdura.indexOf(' '[0]))+1),((verdura.indexOf(' '[0]))+2)).toUpperCase() + verdura.substring(((verdura.indexOf(' '[0]))+2),verdura.length).toLowerCase()

console.log(newVerdura)
