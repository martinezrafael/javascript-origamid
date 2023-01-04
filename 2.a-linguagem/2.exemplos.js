//Sintaxe Básica

const nome = "André";

function somar(a, b) {
  return a + b;
}

somar(2, 4); //Resultado: 6

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  btn.classList.add("ativo");
});
