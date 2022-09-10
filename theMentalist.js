var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou! Uhull 🥳";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Por favor digite um número de 0 a 10 😡";
    return;
  }
  if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "Seu chute é menor que o número secreto... tá quase lá! 😉";
  }
  if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "Seu chute é maior que o número secreto... tente novamente. 🤔";
  }
}
