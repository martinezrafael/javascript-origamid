var nome = "Rafael";
console.log(nome); //Mostra o valor da variável nome no console

var idade = 31;
console.log(idade); //Mostra o valor da variável idade no console

var possuiFaculdade = true;
console.log(possuiFaculdade); //Mostra o valor da variavel possuiFaculdade no console

// DRY
var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

console.log(precoTotal);

// Virgula

var sobrenome = "Martinez",
  cidade = "Peruíbe",
  estado = "São Paulo";

console.log(sobrenome);
console.log(cidade);

var semDefinir;
console.log(semDefinir); //Undefined

// Nomes

// Inválidos
// var §nome;
// var function;
// var 1possuiFaculdade;

// válidos
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

//Declarar
// console.log(goiaba);
// Uncaught ReferenceError: goiaba is not defined

//Hoisting

console.log(comida); //undefined
var comida = "Pizza";
console.log(comida); //Pizza

// Mudar o valor atribuido
var time = "Vasco";
console.log(time); //Vasco
var time = "Flamengo";
console.log(time); //Flamengo

let esporte = "Skate";
console.log(esporte); //Skate
esporte = "Surf";
console.log(esporte); //Surf

// const senha = "1234";
// senha = "4321";
//3.variaveis.js:63 Uncaught TypeError: Assignment to constant variable.

//Exercicio

// Declarar uma variável com o seu nome
var nome = "Rafael";

// Declarar uma variável com a sua idade
var idade = 31;

// Declarar uma variável com a sua comida
// favorita e não atribuir valor
var comidaFavorita;

// Atribuir valor a sua comida favorita
comidaFavorita = "Pastel";

// Declarar 5 variáveis diferentes sem valores
var temperatura, saborPastel, corCamiseta, quantidade, vencedor;
