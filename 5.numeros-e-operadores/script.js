// Números

var idade = 31;
console.log(idade);

var gols = 1000;
var pi = 3.14; //ponto para decimal

var exp = 2e10; //20000000000
console.log(exp);

//Precisão para até 15 digitos

//Operadores Aritméticos

var soma = 100 + 50; //150
var subtracao = 100 - 50; //50
var multiplicacao = 100 * 2; //200
var divisao = 100 / 2; //50
var expoente = 2 ** 4; //16
var modulo = 14 % 5; //4

//Lembrando que som + em strings serve para concatenar

//Operadores Aritméticos (string)

var soma = "100" + 50; //10050
var subtracao = "100" - 50; //50
var multiplicacao = "100" * "2"; //200
var divisao = "Comprei 10" / 2; //NaN (Not a Number)

/*´
  É possível verificar se uma variável é Nan
  ou não com a função isNaN()
*/

//NaN = Not a Number

var numero = 80;
var unidade = "Kg";
var peso = numero + unidade; //'80Kg'
var pesoPorDois = peso / 2; //NaN (Not a Number)

console.log(pesoPorDois);

// A ordem importa
/*
  Começa por multiplicação e divisão, depois por soma e subtração.
*/

var total1 = 20 + 5 * 2; //30
var total2 = (20 + 5) * 2; //50
var total3 = (20 / 2) * 5; //50
var total4 = 10 + 10 * 2 + 20 / 2; //40

//Parênteses para priorizar uma expressão

//Operadores Aritméticos Unários

var incremento = 5;
console.log(incremento++); //5
console.log(incremento); //6

var incremento2 = 5;
console.log(++incremento2); //6
console.log(incremento2); //6

//Mesma coisa para decremento
// --x

//Operadores Aritméticos Unários
//O + e - tenta transformar o valor seguinte em um número

var frase = "Isso é um teste";
+frase; //NaN
-frase; //NaN

var idade = "28";
+idade; //28 (número)
-idade; //-28 (número)
console.log(+idade + 5); //33

var possuiFaculdade = true;

console.log(+possuiFaculdade); //1

//Exercicio

//Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; //35
console.log(total); //35

//Crie duas expressões que retonem NaN

var frase = "uma frase";
var n = 10;

var enan = frase / n;
console.log(isNaN(enan)); //true

//Somar a string '200' com o numero 50 e retornar 250;
var cinquentaN = 50;
var duzentosStr = "200";

var somaStrN = cinquentaN + +duzentosStr;
console.log(somaStrN); //250

//Incremente o número 5 e retorne o seu valor incrementado

var cincoNumber = 5;
console.log(++cincoNumber); //6

/*Como dividir o peso por 2*/
var numero = +"80" / 2;
var unidade = "kg";

var peso = numero + unidade; //80Kg;
console.log(peso);
