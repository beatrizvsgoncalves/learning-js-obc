let cartas = ["A - espadas", "5 - ouros", "K - copas", "9 - paus", "10 - copas", "3 - paus", "7 - espadas", "2 - ouros", "Q - ouros", "Q - espadas", "J - paus", "8 - copas", "J - copas", "K - paus", "4 - espadas", "A - ouros"]
let opcao = ""

do {
    opcao = prompt(
        "Cartas no baralho: " + cartas.length +
        "\n\nEscolha uma opção abaixo:" +
        "\n   [1] Adicionar uma carta" +
        "\n   [2] Puxar uma carta" +
        "\n   [3] Sair"
    )

    switch (opcao) {
        case '1':
            const novaCarta = prompt("Qual o nome da carta? (ex: 3 - ouros)")
            if (cartas.includes(novaCarta) === false) {
                cartas.push(novaCarta)
            } else {
                alert("Essa carta já está no baralho. Insira outra.")
            }
            break
        case '2':
            const cartaPuxada = cartas.pop()
            if (cartaPuxada) {
                alert("Carta puxada do baralho: " + cartaPuxada)
            } else {
                alert("Não há cartas no baralho para puxar. Adicione mais cartas.")
            }
            break
        case '3':
            alert("Finalizando o programa...")
            break
        default:
            alert("Opção inválida! Escolha entre as opções de 1-3.")
    }
} while (opcao !== '3')