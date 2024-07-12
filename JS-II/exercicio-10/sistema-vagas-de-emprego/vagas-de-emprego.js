const lista = [
    {
        nome: "Desenvolvedor Front-End Junior", 
        descricao: "Desenvolvedor Front-End Júnior JavaScript, PJ",
        dataLimite: "15/07/2024",
        candidatos: [
            {nome: "Felipe Melo"},
            {nome: "Janaína Lima"},
            {nome: "Carol Silva"}
        ]
    },
    {
        nome: "Desenvolverdor Back-End Pleno",
        descricao: "Desenvolverdor Back-End Pleno Python",
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
		"Cadastro de Vagas de Emprego\n\n" +
        "Escolha uma das opções:\n" +
        "1. Listar vagas disponíveis\n" +
        "2. Criar uma nova vaga\n" +
        "3. Visualizar uma vaga\n" +
        "4. Inscrever um(a) candidato(a)\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair"
	);
}

function listarVagas() {
    lista.forEach(function (vaga, indice) {
        alert(
            "Vagas disponíveis: " + lista.length + "\n" +
            "\nVaga nº" + (indice + 1) +
            "\nNome: " + vaga.nome + 
            "\nCandidatos: " + vaga.candidatos.length
        )
    })
}

function criarVaga() {
    const vaga = {}

    vaga.nome = prompt("Informe um nome para a vaga:")
    vaga.descricao = prompt("Informe uma descrição para a vaga:")
    vaga.dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga:")
    vaga.candidatos = []

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        lista.push(vaga)
        alert("Vaga criada.")
    } else {
        alert("Voltando ao menu.")
    }
}

function visualizarVaga() {
    const i = Number(prompt("Informe o índice da vaga:"))
    const vaga = lista[i-1]

    const vagaExiste = lista.find((objetoAtual) => {
        return objetoAtual === vaga
    })

    if (vagaExiste) {
        const candidatos = vaga.candidatos.map(function (candidato) {
            return candidato.nome
        }).join(", ")

        alert(
            "Detalhes da vaga nº " + i + "\n" +
            "\nNome: " + vaga.nome +
            "\nDescrição: " + vaga.descricao +
            "\nData limite: " + vaga.dataLimite +
            "\nQuantidade de candidatos: " + vaga.candidatos.length +
            "\nCandidatos: " + candidatos + "."
        )
    } else {
        alert("Essa vaga não existe. Tente novamente.")
    }
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const i = Number(prompt("Informe o índice da vaga:"))
    const vaga = lista[i-1]

    const confirmacao = confirm(
        "Inscrever o(a) candidato(a) na vaga nº " + i + "?\n" +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite
    )
    
    if (confirmacao) {
        vaga.candidatos.push({nome: candidato})
        alert("Inscrição realizada.")
    } else {
        alert("Voltando ao menu.")
    }
}

function excluirVaga() {
    const i = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = lista[i-1]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao + 
        "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vagas.splice(i, 1)
        alert("Vaga excluída.")
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