const imoveis = []
let opcao = "";

do {
    opcao = prompt(
        "Bem-vindo(a) ao Cadastro de Imóveis!" +
        "\n\nTotal de Imóveis: " + imoveis.length +
        "\n" +
        "\n[1] Novo imóvel" +
        "\n[2] Mostrar imóveis" +
        "\n[3] Sair"
    );
        
    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário:")
            imovel.quartos = prompt("Quantidade de quartos:")
            imovel.banheiros = prompt("Quantidade de banheiros:")
            if (imovel.garagem = confirm("O imóvel possui garagem?")) {
                imovel.garagem = "Sim"
            } else {
                imovel.garagem = "Não"
            }

            const confirmacao = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui garagem? " + imovel.garagem
            ) 

            if (confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!");
            } else {
                alert("Voltando ao menu.")
            }
			break;
		case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel: " + (i + 1) + "\n" +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem? " + imoveis[i].garagem
                )
            }
			break;
		case "3":
			alert("Finalizando programa...");
			break;
		default:
			alert("Opção inválida! Escolha entre as opções 1 ou 2.");
	}
} while (opcao !== "3");