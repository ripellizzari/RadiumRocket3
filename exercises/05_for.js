// *************************
// 05.A

var nombres = ['rodrigo', 'matias', 'marcos', 'natalia', 'roberta']

for ( var i = 0; i <= 4; i++) {
    alert(nombres[i])
}

// *************************
// 05.B

for ( var i = 0; i <= 4; i++) {
    alert(nombres[i].substring(0,1).toUpperCase()+ nombres[i].substring(1,nombres[i].length))
}



// *************************
// 05.C

var sentence = '';

for (var i = 0; i < nombres.length; i++){ 
     sentence += nombres[i] + ' '
}

alert(sentence)

// *************************
// 05.D

var emptyArray = [];

for (var i = 0; i< 10; i++){
    emptyArray[i]=i;

}
console.log(emptyArray)
