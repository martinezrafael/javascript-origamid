//Crie um objeto com os seus dados pessoais
//Deve possuir pelo menos duas propriedades nome e sobrenome

let infos = {
  nome: "Rafael",
  sobrenome: "Martinez",
  age: 32,
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

//crie um método no objeto anterior, que mostre o seu nome completo;

let nomeCompleto = infos.nomeCompleto(); //"Rafael Martinez"
console.log(nomeCompleto);

//Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

//Crie um objeto de um cachorro que represente um labrador,
//preto com 10 anos, que late ao ver um homem

let cachorro = {
  raca: "Labrador",
  cor: "preto",
  idade: 10,
  viuOHomem: true,
  latir(pessoa) {
    if (pessoa === "Homem") {
      return "Au Au";
    } else {
      return "Silêncio";
    }
  },
};

//Tudo é objeto

/*
  Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. por isso são objetos.
*/

var nome = "André";

nome.length; //5
nome.charAt(1); //'n'
nome.replace("ré", "rei"); //'Andrei'
nome; //'André';

//Uma string herda propriedades e métodos do construtor String();

//Números
var altura = 1.8;

altura.toString(); //'1.8'
altura.toFixed(); //'2';

/*
  Por um breve momento o número é
  envolvido em um objeto
  (coerção), tendo acesso assim as
  suas propriedades e métodos
*/

//Elementos do DOM

var btn = document.querySelector(".btn");

btn.classList.add("azul"); //adiciona a classe azul
btn.innerText; //"Clique"
btn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Clicou");
});

/*
  Praticamente todos os efeitos
  com JS são feitos utilizando
  propriedades e métodos de
  objetos do DOM.
*/

/*
  Objetos revolucionaram
  a programação

  Web API's são métodos e propriedades que permitem a
  interação Javascript e Browser
*/

//Exercicio - Tudo é Objeto

//Nomeie 3 propriedades ou métodos de string
var nome = "Rafael";
charAt();
replace();
length;

//Nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(".btn");
btn.addEventListener();
btn.setAttribute();
btn.innerText();
btn.appendChild();
btn.id();

//Busque na web um objeto (método) capaz de interagir com o clipboard
//Clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

// https://clipboardjs.com/
