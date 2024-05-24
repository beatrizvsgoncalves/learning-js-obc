let palavra = prompt("Insira uma palavra para verificar se é um palíndromo ou não: ")
let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i]
}

if (palavra.toLowerCase === palavraInvertida.toLowerCase) {
    alert("É um palíndromo \n" + palavra + " = " + palavraInvertida)
} else {
    alert("Não é um palíndromo \n" + palavra + " != " + palavraInvertida)
}