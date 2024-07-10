const characters = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

const classes = characters.reduce(function (acumulador, personagem) {
    if (acumulador[personagem.classe]) {
        acumulador[personagem.classe].push(personagem)
    } else {
        acumulador[personagem.classe] = [personagem]
    }

    return acumulador
}, {})

console.log(classes);
console.log(classes.Paladino[0]);
console.log(classes.Paladino[0].nome);