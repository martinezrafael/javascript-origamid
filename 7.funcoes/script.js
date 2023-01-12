//Funções
/*
  Bloco de código que pode ser executado e reutilizado.
  Valores podem ser passados por uma função e a mesma retorna outro valor.
*/

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4)); //16
console.log(areaQuadrado(5)); //25
console.log(areaQuadrado(2)); //4

//Chamada de function declaration

function pi() {
  return 3.14;
}

var total = 5 * pi(); //15.7
console.log(total);

//Parênteses () executam uma funçao

//Parâmetros e Argumentos
/*
  Ao criar uma função, você pode definir parâmetros.
  Ao executar uma função, você pode passar argumentos.
*/

//peso e altura são parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

imc(80, 1.8); //80 e 1.80 são os argumentos
imc(60, 1.7); //60 e 1.70 são os argumentos

/*
  Separar por vírgula cada
  parâmetro. Você pode desinir
  mais de um parâmetro u nenhum também
*/

//Parênteses executa a função

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}

let color = corFavorita("verde");
console.log(color);

/*
  Se apenas definirmos a função
  com o function e não executarmos
  a mesma, nada que estiver dentro
  dela irá acontecer.
*/

//Argumentos podem ser funções
/*
  Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
*/

addEventListener("click", function () {
  console.log("clicou na tela");
});

//A função possui dois argumentos
//Primeiro é a string 'click
//Segundo é uma função anônima

/*
  Funções anônimas são aquelas em
  que o nome da função não é
  definido, escritas como
  function(){} ou () => {}
*/
