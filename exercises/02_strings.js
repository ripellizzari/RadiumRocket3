// *************************
// 02.A

var lastName2 = 'pellizzari'

console.log(lastName2.toUpperCase())

// *************************
// 02.B

var work2 = 'Asesor Comercial'
var newWork2 = work2.substring(0,5)

console.log(newWork2)

// *************************
// 02.C

var company = 'Uno Propiedades'
var newCompany = company.substring(15,12)

console.log(newCompany)

// *************************
// 02.D

var state = 'inconciente'

var newState = (state.substring(0,1).toUpperCase() + state.substring(1,11).toLowerCase())
console.log(newState)

// *************************
// 02.E

var argentinianCities = 'Santa Teresita';
var newArgentinianCities = argentinianCities.indexOf(' '[0])

console.log(newArgentinianCities)

// *************************
// 02.F

var vegetable = 'zapallo cabutia'
var newVegetable = vegetable.substring(0,1).toUpperCase() + vegetable.substring(1,vegetable.indexOf(' '[0])).toLowerCase() + ' ' +  vegetable.substring(((vegetable.indexOf(' '[0]))+1),((vegetable.indexOf(' '[0]))+2)).toUpperCase() + vegetable.substring(((vegetable.indexOf(' '[0]))+2),vegetable.length).toLowerCase()

console.log(newVegetable)
