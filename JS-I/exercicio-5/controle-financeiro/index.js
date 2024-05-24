let saldo = Number(prompt("Informe a quantidade de dinheiro inicial:"));

do {
	var escolha = prompt(
		"Saldo disponível: R$ " +
			saldo +
			"\n" +
			"\n[1] Adicionar dinheiro" +
			"\n[2] Remover dinheiro" +
			"\n[3] Sair"
	);

	switch (escolha) {
		case '1':
			saldo += Number(prompt("Quantidade a ser adicionada: "));
			break;
		case '2':
			saldo -= Number(prompt("Quantidade a ser removida: "));
			break;
		case '3':
            alert("Saindo...")
			break;
		default:
			alert("Opção inválida");
	}
} while (escolha !== '3');
