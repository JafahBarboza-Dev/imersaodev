// // aprendendo sobre listas (arrays)
// var listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"];
// //                      1           2             3  ~> elemento
// //                      0           1             2  ~> indice

// //adicionando novos elementos na lista
// listaFilmes.push("Harry Potter");

// listaFilmes.push("Percy Jackson");

// listaFilmes.push("Game of Thrones");

// // pode ser <h1>, <p>, <strong>
// // document.write("<p>" + listaFilmes[0] + "</p>");
// // document.write("<p>" + listaFilmes[1] + "</p>");
// // document.write("<p>" + listaFilmes[2] + "</p>");
// // document.write("<p>" + listaFilmes[3] + "</p>");

// //    valor inicial.        condicao                expressão final
// for (var indice = 0; indice < listaFilmes.length; indice++) {
//   document.write("<p>" + listaFilmes[indice] + "</p>");
// }

//AQUI COMEÇA O EXERCICIO DO METEFLIX

var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
  "https://cineclick-static.flixmedia.cloud/480/69/1080x1620_1600955756.jpg",
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg"
];

listaFilmes.push(
  "https://br.web.img3.acsta.net/medias/nmedia/18/87/90/23/19962722.jpg"
);

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
