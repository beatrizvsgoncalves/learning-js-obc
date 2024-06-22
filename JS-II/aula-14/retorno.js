function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media 
} 
// O return é usado para armazenar a saída da função em uma variável e possibilitar trabalhar com esse valor, expressão, etc fora da função.

const resultado = calcularMedia(7, 2)

console.log(resultado)

function criarProduto(nome, preco) {
    const produto = {
        nome, // nome: nome
        preco, // preco: preco
        estoque: 1
    }
    return produto
}

console.log(criarProduto("Notebook Intel Core i3 8GB", 2500));
// Em vez de armazenar esta expressão em uma váriavel, podemos já colocar direto, do mesmo jeito que antes usamos Number(prompt("...")) dá para usar nossas funções próprias, pois no JS é possível chamar uma função em praticamente qualquer lugar. 

function areaRetangular(base, altura) {
    return base * altura
}

function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}
// Neste caso, quando a função areaQuadrada é chamada, é retornado a função areaRetangular passando 9 duas vezes que servirá de base e altura. 

console.log(areaRetangular(14, 5));

console.log(areaQuadrada(9));

function ola() {
    let texto = "..."
    texto = "Olá, mundo"
    return texto
    console.log(texto);
}
// O return indica o fim da função, portanto se tiver algo além será inválido.

console.log(ola());

function maioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}
// Nas ramificações condicionais é possível ter vários returns, isso porque apenas um será executado.

console.log(maioridade(29));
console.log(maioridade(13));