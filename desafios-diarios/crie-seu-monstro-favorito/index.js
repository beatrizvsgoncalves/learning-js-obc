let monsterName = undefined;
let monsterElement = undefined;
let monsterHealth = undefined;
let monsterSkills = undefined;
let health = undefined;

execute()
function execute() {
	let option = "";

	do {
		option = promptMenu();

		switch (option) {
			case "1":
				nameMonster();
				break;
			case "2":
				elementMonster();
				break;
			case "3":
				healthMonster()
				break;
			case "4":
				skillsMonster();
				break;
			case "5":
				createCardMonster();
        monsterLog()
				break;
			case "6":
				alert("Finalizando programa...");
				break;
			default:
				alertInvalidOption();
		}
	} while (option !== "6");
}

function promptMenu() {
	return prompt(`Crie Seu Monstro Favorito!
        
Escolha uma das opções a abaixo para personalizar o seu monstro:
    [1] Nome
    [2] Tipo de elemento
    [3] Ponto de Vida
    [4] Habilidades
    [5] Mostrar card do monstro
    [6] Sair`);
}

function nameMonster() {
  monsterName = prompt('Insira o nome do seu monstro:')
  successMsg()
}

function elementMonster() {
	monsterElement = prompt(`Insira o elemento do seu monstro:
      [1] fogo
      [2] água
      [3] terra
      [4] ar
    `);

	switch (monsterElement) {
		case "1":
			monsterElement = "fogo";
      successMsg()
			break;
		case "2":
			monsterElement = "água";
      successMsg()
			break;
		case "3":
			monsterElement = "terra";
      successMsg()
			break;
		case "4":
			monsterElement = "ar";
      successMsg()
			break;
		default:
			alertInvalidOption();
	}
}

function healthMonster() {
	health = Number(prompt("Insira os pontos de vida de seu monstro: [50-200]"));
  if (health >= 50 && health <= 200) {
    monsterHealth = health
    successMsg()
  } else {
    alertInvalidOption()
  }
}

function skillsMonster() {
	monsterSkills = [];
	let option = "";

	while (option !== "2") {
    option = prompt(`Habilidades: 
      [1] Adicionar habilidade
      [2] Finalizar
    `);
      
    switch (option) {
      case "1":
        if (monsterSkills.length < 3) {
          let skill = prompt(
            "Insira o nome da habilidade: [Ex: voar, soltar chamas, etc]"
          );
          monsterSkills.push(skill);
        } else {
          alert('O seu monstro já alcançou o limite de 3 habilidades.')
        }
        break;
      case "2":
        alert("Voltando ao menu...");
        break;
      default:
        alertInvalidOption();
    }
	}
}

function createCardMonster() {
  if (monsterName !== undefined && monsterElement !== undefined && monsterHealth !== undefined && monsterSkills !== undefined) {
    alert(` Card do seu monstro
      
      Nome: ${monsterName}
      Tipo de elemento: ${monsterElement}
      Pontos de vida: ${monsterHealth}
      Habilidades: ${monsterSkills.join(", ")}
      `);
    } else {
      alert('Adicione todas as características do seu monstro!')
    }
}

function successMsg() {
    alert('Adicionado com sucesso! Voltando ao menu...')
}

function alertInvalidOption() {
	alert("Opção inválida! Tente novamente.");
}

function monsterLog() {
	const monster = {
		name: monsterName,
		element: monsterElement,
		health: monsterHealth,
		skills: [monsterSkills],
	};
	console.log(monster);
}