// 7 tipos de dados
//Todos são primitivos execeto os objetos

/*
var nome = "Rafael"; //String
var idade = 31; //Number
var possuiFaculdade = true; //boolean
var time; //undefined
var comida = null; //Null
var simbolo = Symbol(); //Symbol
var novoObjeto = {}; //Object
*/

//Primitivos são dados imutáveis

//Verificar tipo

var nome = "André";
console.log(typeof nome); //string

var idade = 31;
console.log(typeof idade); //number

/*Antes null era um objeto e isso não foi alterado
para não quebrar códigos antigos*/
var time = null;
console.log(typeof time); //object

var simbolo = Symbol();
console.log(simbolo); //symbol

//Strings
//Você pode somar uma string e assim concatenar as palavras

var nome = "André";
var sobrenome = "Rafael";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto); //André Rafael

//Você pode somar números com strings, o resultado final é sempre uma string.

var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(frase); //Romário fez 1000 gols

var ano = "2018";
var mes = 08;
console.log(ano + mes); //20188

//Aspas Duplas, Simples e Template String
/* 
'Javascript é "super" fácil';
"Javascript é 'super' fácil";
"Javascript é \"super\" fácil";
`Javascript é "super" fácil`;

"Javascript é "super" fácil"; //Inválido
*/

/*Não necessáriamente precisamos
Atribuir valores a uma variável*/

//Template String

var gols = 1000;
var frase1 = "Romário fez " + gols + " gols";
var frase2 = `Romário fez ${gols * 2} gols`; //Utilizando o template string

console.log(frase2); //Romário fez 2000 gols

//Você deve passar expressões variáveis dentro de ${}

//Exercicio
// Declare uma variável contendo uma string
var string = "Uma string";
console.log(typeof string); //string

// Declare uma variável contendo um número dentro de uma string
var numberString = "350";

// Declare uma variável com a sua idade
var idade = 31;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = "Rafael";
var sobrenome = "Martinez";
var nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto); //Rafael Martinez

// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time";

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome); //string
