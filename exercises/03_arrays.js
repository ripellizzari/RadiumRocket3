// *************************
// 03.A

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']


console.log(months[4])
console.log(months[10])

// *************************
// 03.B

console.log(months.sort())

// *************************
// 03.C

months.push('Mes al final')
months.unshift('Mes al principio')

console.log(months)

// *************************
// 03.D

months.shift()
months.pop()

console.log(months)

// *************************
// 03.E


console.log(months.reverse())

// *************************
// 03.F

console.log(months.join(['-']))

// *************************
// 03.G

var newMonths = months.slice(4,11)

console.log(newMonths)

// *************************


