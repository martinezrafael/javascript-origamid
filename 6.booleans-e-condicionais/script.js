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

//Operadores Lógicos &&

//&& Compara se uma expressão e a outra é verdadeira

console.log(true && true); //true
console.log(true && false); ///false
console.log(false && true); //false
console.log("Gato" && "Cão"); //'Cão
console.log(5 - 5 && 5 + 5); //0
console.log("Gato" && false); //false
console.log(5 >= 5 && 3 < 6); //true

/*
  Se ambos os valores forem true
  ele irá retornar o último valor verificado.
  Se algum valor for false ele irá retornar
  o mesmo e não irá continuar a verificar os próximos.
*/

//Operadores Lógicos || (ou)
//Compara se uma expressão ou outra é verdadeira

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log("Gato" || "Cão"); //'Gato'
console.log(5 - 5 || 5 + 5); //10
console.log("Gato" || false); //Gato
console.log(5 >= 5 && 3 < 6); //true

//Retorna o primeiro valor true que encontrar

//Switch
/*
  Com o switch você pode verificar se uma variável é igual
  a diferentes valores utilizando o case. Caso ela seja igual, você pode cancelar c ontinuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
*/

var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Vermelho":
    console.log("Olhe para as rosas");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
  default:
    console.log("Feche os olhos");
}

//Exercício

/*
Verifique se a sua idade é maior que a de algum parente
Dependendo do resultado coloque no console 'É maior', ´É igual' ou 'É menor'
*/

var minhaIdade = 31;
var idadeParente = 73;

if (minhaIdade > idadeParente) {
  console.log("E maior");
} else if (minhaIdade === idadeParente) {
  console.log("É igual");
} else {
  console.log("É menor");
}

//Qual é o valor rtornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; //3
console.log(expressao);

//Varifique se as seguiintes varuáveis são Truthy ou Falsy
var nome = "André"; //true;
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

if (nome) {
  console.log("Verdadeiro"); //true
} else {
  console.log("Falso");
}

if (idade) {
  console.log("Verdadeiro"); //true
} else {
  console.log("Falso");
}

if (possuiDoutorado) {
  console.log("Verdadeiro"); //false
} else {
  console.log("Falso");
}

if (empregoFuturo) {
  console.log("Verdadeiro"); //false
} else {
  console.log("Falso");
}

if (dinheiroNaConta) {
  console.log("Verdadeiro"); //false
} else {
  console.log("Falso");
}

//Compare o total de habitantes no Brasil com china (valor em milhões)

var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil tem mais habitantes");
} else {
  console.log("Brasil tem menos habitantes");
}

//O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro"); //Falso
} else {
  console.log("Falso");
}

//O que irá aparecer no console?

if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); //Cão
} else {
  console.log("Falso");
}
