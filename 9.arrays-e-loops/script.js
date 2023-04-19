//Array

/*
  É um grupo de valores geralmente relacionados. Servem para
  guardarmos diferentes valores em uma única variável.
*/

var videoGames = ["Switch", "PS4", "Xbox"];

let Nswitch = videoGames[0]; //'Switch'
let ps4 = videoGames[1]; //'PS4'
let xbox = videoGames[2]; //'Xbox'

//Acesse um elemento de array utilizando [n]

//Métodos e propriedades de uma array

videoGames.pop(); //Remove o último item e retorna ele
videoGames.push("3ds"); //Adiciona ao final da array
videoGames.length; //3

/*
  Existem diversos outros métodos,
  como map, reduce, forEach e
  mais que veremosmais à frente
*/

//For Loop
//Fazem algo repetidamente até que uma condição seja atingida

for (let numero = 0; numero <= 10; numero += 1) {
  console.log(numero);
}
//Retorna de 0 a 9 no console
//O for loop possui 3 partes, inicio, condicao e incremento

//While Loop
var i = 0;
while (i < 10) {
  console.log(`i é igual a ${i}`);
  i++;
}

//Retorna de 0 a 9 no console
//O for loop é mais comum
