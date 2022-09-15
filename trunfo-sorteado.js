var card1 = {
  name: "Bulbasauro",
  atributes: {
    atk: 7,
    def: 8,
    mag: 6
  }
};

var card2 = {
  name: "Darth Vader",
  atributes: {
    atk: 9,
    def: 8,
    mag: 2
  }
};

var card3 = {
  name: "Shiryu de Dragão",
  atributes: {
    atk: 5,
    def: 9,
    mag: 10
  }
};

var cards = [card1, card2, card3];
var cardPC;
var cardPlayer;

function sortearCarta() {
  var cardNumberPC = parseInt(Math.random() * 3);
  cardPC = cards[cardNumberPC];

  var cardNumberPlayer = parseInt(Math.random() * 3);
  while (cardNumberPC == cardNumberPlayer) {
    cardNumberPlayer = parseInt(Math.random() * 3);
  }
  cardPlayer = cards[cardNumberPlayer];
  console.log(cardPlayer);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  var options = document.getElementById("opcoes");
  var optionsText = "";
  for (var atribute in cardPlayer.atributes) {
    optionsText +=
      "<input type='radio' name='atribute' value='" +
      atribute +
      "'>" +
      atribute;
  }
  options.innerHTML = optionsText;
}

function selectAtribute() {
  var radioAtributes = document.getElementsByName("atribute");
  for (var i = 0; i < radioAtributes.length; i++) {
    if (radioAtributes[i].checked == true) {
      return radioAtributes[i].value;
    }
  }
}

function jogar() {
  var selectedAtribute = selectAtribute();
  var resultElement = document.getElementById("resultado");
  var valueCardPlayer = cardPlayer.atributes[selectedAtribute];
  var valueCardPC = cardPC.atributes[selectedAtribute];

  if (valueCardPlayer > valueCardPC) {
    resultElement.innerHTML = "Você ganhou!";
  } else if (valueCardPC > valueCardPlayer) {
    resultElement.innerHTML = "Você perdeu!";
  } else {
    resultElement.innerHTML = "Empate técnico!";
  }
  console.log(cardPC);
}
