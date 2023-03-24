//Exercícios
//verifique se a sua idade é maior do que a de algum parente
//Dependendo do resultado coloque no console 'É maior' ou 'É menor'

var dataObject = new Date();
var anoAtual = dataObject.getFullYear();

var aline = anoAtual - 1994;
var rafael = anoAtual - 1991;

if (rafael > aline) {
  console.log("É maior");
} else if (rafael === aline) {
  console.log("É igual");
} else {
  console.log("É menor");
}

//qual o valor retornado na seguinte expressão?

var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);

//verifique se as seguintes variáveis são Thruthy ou falsy
var nome = "André"; //truthy
var idade = 28; //truthy
var possuiDoutorado = false; //falsy
var empregoFuturo; //falsy
var dinheiroNaConta = 0; //falsy

if (dinheiroNaConta) {
  console.log("Thruthy");
} else {
  console.log("Falsy");
}
