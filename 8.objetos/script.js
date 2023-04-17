//Objetos

//Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
  nome: "André",
  idade: 28,
  profissao: "Designer",
  possuiFaculdade: true,
};

var nome = pessoa.nome;
var faculdade = pessoa.possuiFaculdade;

console.log(pessoa);
console.log(nome);
console.log(faculdade);

//Métodos
/*
  É uma propriedade que possui uma função no local do seu valor
*/

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.lados);
const area = quadrado.area(5);
console.log(area);
const perimetro = quadrado.perimetro(5);
console.log(perimetro);

//Organizar o Código
//Objetos servem para organizar o código em pequenas partes reutilizáveis

Math.PI; //3.14
Math.random(); //Número Aleatório

var pi = Math.PI;
console.log(pi * Math.random());

//Math é um objeto nativo de Javascript
//Já percebeu que console é um objeto e log() um método?

// var menu = {
//   width: 800,
//   height: 50,
//   backgroundColor: "#84e",
// };

// menu.backgroundColor = "#000";

// menu.color = "blue";

// var bg = menu.backgroundColor;
// console.log(bg);

//Palavra chave this
//this irá fazer uma referência ao próprio objeto

var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};

var aluno = {
  nome: "Rafael",
  idade: 32,
  pagou: false,
  podeAcessar() {
    return this.pagou ? "Acesso Liberado" : "Acesso Negado";
  },
};

//verifica se tem a proporiedade width no objeto
let hasWidth = menu.hasOwnProperty("width");
console.log(hasWidth);
