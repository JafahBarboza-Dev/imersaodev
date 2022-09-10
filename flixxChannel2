function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  //var criada em uma function não passa pra outra se nao tiver no ()
  if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png")) {
    listarFilmesNaTela(filmeFavorito);
    //mandando a var filmeFavorito
  } else {
    console.error("Endereço Inválido");
  }

  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  //recebendo a var filmeFavorito e transformando em filme
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var listaFilmes = document.getElementById("listaFilmes");
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilmeFavorito;
}
