let pacientes = [
	"Patrícia Santos",
	"Manuel Oliveira",
	"Maria da Silva",
	"Gislene Souza",
];
let opcao = ""

do {
	let lista = "";
	for (var indice = 0; indice < pacientes.length; indice++) {
		let paciente = pacientes[indice];
		lista += "  " + (indice + 1) + "º " + paciente + "\n";
	}

	opcao = prompt(
		"Lista de Espera: \n" +
			lista +
			"--------------------------------------------" +
			"\n Escolha uma das opções abaixo: " +
			"\n   [1] Novo paciente" +
			"\n   [2] Consultar paciente" +
			"\n   [3] Sair"
	);

	switch (opcao) {
		case "1":
			const novoPaciente = prompt("Insira o nome do paciente: ");
			if (novoPaciente !== "") {
				pacientes.push(novoPaciente);
			} else {
				alert("Campo em branco. Tente novamente.");
			}
			break;
		case "2":
			const pacienteConsultado = pacientes.shift();
			if (pacienteConsultado) {
				// Mesmo que o que for passado não seja booleano o JS converte para se ajustar, neste caso, se a variável 'pacienteConsultado' não tiver valor algum será FALSO, e se tiver é VERDADEIRO. Outras alternativas: pacientes[0] !== undefined | typeOf pacienteConsultado === "string" | pacientes.length < 0
				alert("Paciente " + pacienteConsultado + " sendo consultado(a).");
			} else {
				alert("Não há pacientes na fila para ser consultado.");
			}
			break;
		case "3":
			alert("Finalizando programa...");
			break;
		default:
			alert("Opção inválida! Escolha entre as opção de 1-3.");
			break;
	}
} while (opcao !== "3");
