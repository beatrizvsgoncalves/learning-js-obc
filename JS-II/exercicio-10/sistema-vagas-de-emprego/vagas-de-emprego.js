const lista = [
    {
        nome: "Desenvolvedor Front-End Junior", 
        descricao: "...",
        dataLimite: "15/07/2024",
        candidatos: [
            {nome: "Felipe Melo"},
            {nome: "Janaína Lima"},
            {nome: "Carol Silva"}
        ]
    },
    {
        nome: "Desenvolverdor Back-End Pleno",
        descricao: "...",
        dataLimite: "01/08/2024",
        candidatos: [
            {nome: "Jorge Cruz"},
            {nome: "Gabriel Pontes"},
            {nome: "Raquel Souza"}

        ]
    }
]

function exibirMenu() {
	return prompt(
		"Vagas de Emprego\n\n" +
			"1. Vagas disponíveis\n" +
			"2. Criar nova vaga\n" +
			"3. Visualizar uma vaga\n" +
			"4. Increver candidato\n" +
			"5. Excluir vaga\n" +
			"6. Sair"
	);
}

function listarVagas() {
    lista.forEach(function (vaga, indice) {
        alert(
            "Vagas disponíveis:\n" +
            "\nVaga " + (indice + 1) +
            "\nCargo: " + vaga.nome + 
            "\nCandidatos: " + vaga.candidatos.length
        )
    })
}

function criarVaga() {
    const vaga = {}

    vaga.nome = prompt("Informe o nome da vaga:")
    vaga.descricao = prompt("Descrição da vaga:")
    vaga.dataLimite = prompt("Data limite para candidatura:")
    vaga.candidatos = []

    const confirmacao = confirm(
        "Salvar esta vaga?\n" +
        "\nVaga: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        lista.push(vaga)
        alert("Vaga salva com sucesso!")
    } else {
        alert("Voltando ao menu.")
    }
}

let nomes = Array()

function visualizarVaga() {
    const i = Number(prompt("Informe o índice da vaga:")) - 1
    nomes += lista[i].candidatos.map(function (candidato) {
        return candidato.nome
    }).join(", ")

    alert(
        "Detalhes da vaga\n" +
        "\nVaga: " + (i+1) +
        "\nNome: " + lista[i].nome +
        "\nDescrição: " + lista[i].descricao +
        "\nData limite: " + lista[i].dataLimite +
        "\nCandidatos: " + lista[i].candidatos.length +
        "\nNomes dos candidatos: " + nomes + "."
    )
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do candidato:")
    const i = Number(prompt("Informe o índice da vaga:"))
    const confirmacao = confirm(
        "Inscrever o candidato nesta vaga?\n" +
        "\nVaga: " + i +
        "\nCargo: " + lista[i-1].nome +
        "\nDescrição: " + lista[i-1].descricao
    )
    
    if (confirmacao) {
        lista[i].candidatos.push({nome: candidato})
        nomes += candidato + ", "
    } else {
        alert("Voltando ao menu...")
    }
}

function excluirVaga() {
    const i = prompt("Informe o índice da vaga:")
    const confirmacao = confirm(
        "Excluir esta vaga?\n" + 
        "\nVaga: " + lista[i-1].nome +
        "\nDescrição: " + lista[i-1].descricao
    )

    if (confirmacao) {
        delete lista[i-1]
        alert("Vaga excluída com sucesso!")
    } else {
        alert("Voltando ao menu...")
    }
}

function executar() {
	let opcao = String();

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case '1':
                listarVagas()
                break
            case '2':
                criarVaga()
                break
            case '3':
                visualizarVaga()
                break
            case '4':
                inscreverCandidato()
                break
            case '5':
                excluirVaga()
                break
            case '6':
                alert("Saindo...")
                break
            default:
                alert("Opção inválida.")
        }
    } while (opcao !== '6')
}

executar()