// *************************
// 06.A

var c =  suma(3, 5)

function suma (a, b) {
        return a + b;
    
}

console.log(c)

// *************************
// 06.B


function validacion (a, b) {
    if (typeof a != 'number' || typeof b != 'number'){
        alert('error')
        return NaN
    } else { 
        return a+b

    }
}

console.log(validacion(10, 8))


// *************************
// 06.C

function validateInteger(num) {
    if (Number.isInteger(num)){
        return true
    } else {
        return false
    }
 }

 console.log(validateInteger(2))

// *************************
// 06.D


 function validacion2 (a, b) {
    if (typeof a != 'number' || typeof b != 'number'){
        alert('Error')
        return NaN
    } else if (!Number.isInteger(a) || !Number.isInteger(b)){ 
        alert('Error hay decimal')
        return Math.round(a+b)

    } else {
        
        alert('Validado' + ' en ' + (a+b) )
        
    }
}


console.log(validacion2(1, 14))


// *************************
// 06.E

function validacion3 (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        alert('error')
        return false
    } else { 
        return true
    }
}

function suma2 (a, b) { 
    if (validacion3(a, b)){
        return a+b
    } 
}

console.log(suma2(2, 4))






