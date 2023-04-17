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
