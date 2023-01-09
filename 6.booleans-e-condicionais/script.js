//Boolean e Condicionais

//Boolean
//Existem dois valores booleanos false ou true.

var possuiFaculdade = true;
var possuiDoutorado = false;

//Condicionais if e else
/*
  Verificar se uma expressão é verdadeira com if,
  caso contrário o else será ativado.
*/

var possuiGraduacao = true;

// if (possuiGraduacao) {
//   console.log("Possui Graduação");
// } else {
//   console.log("Não possui graduação");
// }

//Retorna Possui Graduação e não executa o else
/*
  O valor dentro dos parênteses
  sempre será avaliado em false ou true.
*/

//Condicionais else if
//Se o if não for verdadeiro, ele testa o else if

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}

//Retorna possui graduação, mas não possui doutorado

//Truthy e Falsy
/*
  Existem valores que retornam true e outros que retornam
  false quando verificados em uma expressão booleana.
*/

//Falsy
//if(false)
//if(0) //ou -0
//if(NaN)
//if(null)
//if(undefined)
//if('') // ou "" ou ``

//Todo o resto é thruthy

//Truthy
//if(true)
//if(1)
//if(' ')
//if('andre)
//if(-5)
// if({})

//Operador lógico de negação
/*
  O operador !, nega uma operação booleana.Ou seja,
  !true é igual a false
*/

//Truthy
//if(!true) //false
//if(!1) //false
//if(!'') // true
//if(!undefined) //true
//(!!' ') //true
//(!!'') //false

/*
  Dica, você pode utilizar o !!
  para verificar se uma expressão
  é Truthy ou Falsy
*/

//Operadores de comparação
//Vão sempre retornar um valor booleano
console.log(10 > 5); //true
console.log(5 > 10); //false
console.log(20 < 10); //false
console.log(10 <= 10); //true
console.log(10 >= 11); //false

/*
  O == faz uma comparação não tão estrita e o === faz
  uma comparação estrita, ou seja, o tipo de dado deve
  ser o mesmo quando usamos ===
*/

console.log(10 == "10"); ///true
console.log(10 == 10); //true
console.log(10 === "10"); //false
console.log(10 === 10); //true
console.log(10 != "10"); //false
console.log(10 !== "10"); //true
