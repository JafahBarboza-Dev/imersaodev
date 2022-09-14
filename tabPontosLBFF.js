//           chave. valor.  chave. valor
var pain = { nome: "pAIN", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var fx = { nome: "Fluxo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var loud = { nome: "Loud", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var lG = {
  nome: "Los Grandes",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var b4 = { nome: "B4", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var vK = { nome: "Vivo Keyd", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var god = { nome: "GOD", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var cor = {
  nome: "Corinthians",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var fur = { nome: "Furia", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var real = { nome: "Real", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var tropa = { nome: "Tropa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

pain.pontos = calculaPontos(pain);
fx.pontos = calculaPontos(fx);
loud.pontos = calculaPontos(loud);
lG.pontos = calculaPontos(lG);
b4.pontos = calculaPontos(b4);
vK.pontos = calculaPontos(vK);
god.pontos = calculaPontos(god);
cor.pontos = calculaPontos(cor);
fur.pontos = calculaPontos(fur);
real.pontos = calculaPontos(real);
tropa.pontos = calculaPontos(tropa);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

var jogadores = [pain, fx, loud, lG, b4, vK, god, cor, fur, real, tropa];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}
