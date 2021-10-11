// *************************
// 03.A

var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']


console.log(meses[4])
console.log(meses[10])

// *************************
// 03.B

console.log(meses.sort())

// *************************
// 03.C

meses.push('Mes al final')
meses.unshift('Mes al principio')

console.log(meses)

// *************************
// 03.D

meses.shift()
meses.pop()

console.log(meses)

// *************************
// 03.E


console.log(meses.reverse())

// *************************
// 03.F

console.log(meses.join(['-']))

// *************************
// 03.G

var newMeses = meses.slice(4,11)

console.log(newMeses)

// *************************


