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
