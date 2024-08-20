const buttonLineup = document.getElementById("button");
if (buttonLineup) {
	buttonLineup.addEventListener("click", lineupPlayer, false);
}

let eventExecuted = false;

function lineupPlayer() {
	if (!eventExecuted) {
		const sectionForm = document.getElementById("form");
		const sectionPlayers = document.getElementById("players-list");

		const h2 = document.createElement("h2");
		h2.innerText = "Informe as seguintes informações sobre o jogador";

		const ul = document.createElement("ul");

		const liPosition = document.createElement("li");
		liPosition.innerText = "Posição: ";
		const inputPosition = document.createElement("input");
		inputPosition.type = "text";
		inputPosition.name = "position";
		inputPosition.id = "position";
		liPosition.appendChild(inputPosition);
		ul.appendChild(liPosition);
		ul.appendChild(document.createElement("br"));

		const liName = document.createElement("li");
		liName.innerText = "Nome: ";
		const inputName = document.createElement("input");
		inputName.type = "text";
		inputName.name = "name";
		inputName.id = "name";
		liName.appendChild(inputName);
		ul.appendChild(liName);
		ul.appendChild(document.createElement("br"));

		const liNumber = document.createElement("li");
		liNumber.innerText = "Número: ";
		const inputNumber = document.createElement("input");
		inputNumber.type = "number";
		inputNumber.name = "number";
		inputNumber.id = "number";
		liNumber.appendChild(inputNumber);
		ul.appendChild(liNumber);

		const button = document.createElement("button");
		button.innerText = "Escalar";
		button.addEventListener("click", list);

		function list() {
			if (
				inputPosition.value !== "" ||
				inputName.value !== "" ||
				inputNumber.value !== ""
			) {
				const confirmation = confirm("Você deseja escalar este jogador?");

				if (confirmation) {
					const playersList = document.createElement("ul");
					const player = document.createElement("li");
					player.innerText =
						"Posição: " +
						inputPosition.value +
						" | " +
						"Nome: " +
						inputName.value +
						" | " +
						"Número da camisa: " +
						inputNumber.value;
					playersList.appendChild(player);
					sectionPlayers.appendChild(playersList);

					inputPosition.value = "";
					inputName.value = "";
					inputNumber.value = "";
				}
			} else {
				alert("Preencha os campos antes de enviar.");
			}
		}

		sectionForm.append(h2, ul, button);
        sectionForm.innerHTML += "<hr>"

		eventExecuted = true;
	}
}

function removePlayer() {
	if (eventExecuted) {
		const sectionPlayers = document.getElementById("players-list");

		const p = document.createElement("p");
		p.innerText = "Informe o número da camisa do jogador: ";
		const player = document.createElement("input").value;
		player.type = "number";

		const inputs = document.getElementsByTagName("input");
        //const n = inputs.namedItem(player)

		console.log(inputs);

        sectionPlayers.append(p, player)
	} else {
		alert("Não há jogadores escalados no momento.");
	}
}
