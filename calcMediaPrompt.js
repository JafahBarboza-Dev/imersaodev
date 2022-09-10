//Variáveis
var nota1Bim, nota2Bim, nota3Bim, nota4Bim
var nome

nome = prompt ("Olá! Seja bem vindo! Por favor, nos informe o seu nome.")
nota1Bim = parseFloat(prompt (nome + ", qual foi a sua nota no 1º Bimestre?"))
nota2Bim = parseFloat(prompt ("E no 2º Bimestre?"))
nota3Bim = parseFloat(prompt ("No 3º Bimestre, você ficou com quanto, " + nome + "?"))
nota4Bim = parseFloat(prompt ("Por fim, qual sua nota no 4º Bimestre?"))

var notaFin = (nota1Bim + nota2Bim + nota3Bim + nota4Bim) / 4
var notaFix = notaFin.toFixed(2)

alert(nome + ", sua média é: " + notaFix)
console.log("Nome do Estudante: " + nome)
console.log("Média: " + notaFix)




// isso é um comentário 

// Revisão
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação
