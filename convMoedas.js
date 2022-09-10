function Converter1() {
  var valorElemento = document.getElementById("valor");

  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmDolar = valorEmRealNumerico * 5.25;
  console.log("US$ " + valorEmDolar);

  if (valor == "") {
    alert("[ERROR] Por favor, digite um valor!");
    return;
  }

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "R$ " + valorEmRealNumerico + " corresponde a US$ " + valorEmDolar;
  elementoValorConvertido.innerHTML = valorConvertido;
}
function Converter2() {
  var valorElemento = document.getElementById("valor");

  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmEuro = valorEmRealNumerico * 5.2;
  console.log("€ " + valorEmEuro);

  if (valor == "") {
    alert("[ERROR] Por favor, digite um valor!");
    return;
  }

  var elementoValorConvertido = document.getElementById("valorConvertido1");
  var valorConvertido =
    "R$ " + valorEmRealNumerico + " corresponde a € " + valorEmEuro;
  elementoValorConvertido.innerHTML = valorConvertido;
}
