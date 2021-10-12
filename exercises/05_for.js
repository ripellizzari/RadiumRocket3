// *************************
// 05.A

var names = ['rodrigo', 'matias', 'marcos', 'natalia', 'roberta'];

for ( var i = 0; i <= 4; i++) {
    alert(names[i]);
}

// *************************
// 05.B

for ( var i = 0; i <= 4; i++) {
    alert(names[i].substring(0,1).toUpperCase()+ names[i].substring(1,names[i].length));
}



// *************************
// 05.C

var sentence = '';

for (var i = 0; i < names.length; i++){ 
     sentence += names[i] + ' ';
}

alert(sentence);

// *************************
// 05.D

var emptyArray = [];

for (var i = 0; i< 10; i++){
    emptyArray[i]=i;

}
console.log(emptyArray);
