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

//Pode ou não retornar um valor
/*
  Quando não definimos o return, ela irá retornar undefined.
  O código interno da função é executado normalmente,
  independente de existir valor no return ou não.
*/

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(80, 1.8); //retorna o imc
console.log(imc2(80, 1.8)); //retorna undefined

//Valores retornados
/*
  Uma função pode retornar qualquer tipo de dado
  e até outras funções
*/

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor preencha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

/* 
  Cuidado, retornar difertentes 
  tipos de dados na mesma função
  não é uma boa ideia.
*/

console.log(terceiraIdade(100));

//Escopo
/* 
  Variáveis e funções definidas dentro de um bloco {},
  não são visíveis fora dele.
*/

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam visitar ${totalPaises - paisesVisitados} países`;
}

console.log(precisoVisitar(34)); //Ainda faltam visitar 159 países

// console.log(totalPaises); //totalPaises is not defined

//Escopo Léxico
/*
  Funções conseguem acessar variáveis que foram criadas no contexto pai
*/

var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;

  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco} ${profissao}`;
  }

  return outrosDados();
}

console.log(dados()); //Retorna 'André, 29, Rio de Janeiro, Designer'

// console.log(outrosDados()); //Retorna um erro

//Hoisting
/*
  Antes de executar uma função, o JS 'move' todas
  as funções declaradas para a memória.
*/

imc3(80, 1.8); //imc aparece no console

function imc3(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

//Exercicios

//Crie uma função para verificar se um valor é thruthy

function isThruthy(valor) {
  return !!valor;
}

console.log(isThruthy(0));

//crie uma função matemática que retorne o perímetro de um qudrado
//lembrando? perimetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
  return lado * 4;
}

console.log(perimetroQuadrado(3));

//crie uma função que retorne o seu nome completo
//ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  console.log(`${nome} ${sobrenome}`);
}

console.log(nomeCompleto("Rafael", "Martinez"));

//Crie uma função que verifica se um número é par
function ePar(numero) {
  if (numero % 2 === 0) {
    return `${numero} é par`;
  } else {
    return `${numero} é impar`;
  }
}

console.log(ePar(4));

//Crie uma função que retorne o tipo de
//dado do argumento passado nela (typeof)

function typeData(data) {
  return typeof data;
}

console.log(typeData(true));

/*
  addEventListener é uma função nativa do Javascript
  o primeiro parâmetro é o evento que ocorre e o segundo
  o callback, utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer
*/

addEventListener("scroll", function () {
  console.log("Rafael Molina Martinez");
});

//corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
