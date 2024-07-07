function calcular(a, b, operacao) {
    console.log("Realizando uma operação.");
    const resultado = operacao(a, b) // somar(3, 5)
    return resultado
}

function somar(x, y) {
    console.log("Realizando uma soma.");
    return x + y
}

console.log(calcular(3, 5, somar))

console.log(calcular(8, 4, function (x, y) {
    console.log("Realizando uma subtração.");
    return x - y
}))

function exibirElemento(elemento, indice, array) {
    console.log({
        elemento, 
        indice,
        array
    })
}

const lista = ["Maça", "Banana", "Laranja", "Limão"]

/* Usando loops 
for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista)
    
} 
*/

// Usando high-order functions
lista.forEach(exibirElemento)

// Usando funções anônimas na hof forEach
lista.forEach(function (elemento, indice, array) {
    console.log({
        elemento, 
        indice,
        array
    })
})