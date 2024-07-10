const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Map

/* 
const nomes = []

for (let i = 0; i < personagens.length; i++) {
    nomes.push(personagens[i].nome)
} 
*/

const nomes = personagens.map(function (personagem) {
    return personagem.nome
})

console.log(nomes);

// Filter

/* 
const orcs = []

for (let i = 0; i < personagens.length; i++) {
    if (personagens[i].raca === "Orc") {
        orcs.push(personagens[i])
    }
}
*/

const orcs = personagens.filter(function (personagem) {
    return personagem.raca === "Orc"
})

console.log(orcs)

// Reduce

/* 
let nivelTotal = 0

for (let i = 0; i < personagens.length; i++) {
    nivelTotal += personagens[i].nivel;
} 
*/

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem /*, indice, array*/) {
    return valorAcumulado + personagem.nivel
}, 0) // Ao fazer um acúmulo de números, se não adicionar o valor inicial, ao invés de somar irá concatenar

console.log(nivelTotal)

const racas = personagens.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
}, {})

console.log(racas)

/* 
const racas = {
    Orc: [{...},{...},{...}],
    Humano: [{...},{...}],
    Elfo Noturno: [{...}],
    Anão: [{...}]
}
*/

// Sort 

personagens.sort(function (personagemA, personagemB) {
    return personagemA.nivel - personagemB.nivel
})

console.log("Crescente");
console.log(personagens);

const nivelDecrescente = personagens.slice().sort(function (personagemA, personagemB) {
    return personagemB.nivel - personagemA.nivel
})

console.log("Decrescente");
console.log(nivelDecrescente);