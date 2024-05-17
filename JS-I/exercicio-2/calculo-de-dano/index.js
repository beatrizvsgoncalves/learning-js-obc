let characterAttack = prompt("Nome do personagem atacante:");
let attackPower = Number(prompt("Poder de ataque:"));
let characterDefense = prompt("Nome do personagem defensor:");
let lifesPoints = Number(prompt("Pontos de vida:"));
let defensePower = Number(prompt("Poder de defesa:"));
let shield = confirm("O personagem defensor possui um escudo?");
let haveShield = (shield == true) ? "Sim" : "Não"
let damage = undefined;

if (attackPower > defensePower && shield == false) {
	damage = attackPower - defensePower;
} else if (attackPower > defensePower && shield == true) {
	damage = attackPower - defensePower / 2;
} else if (attackPower <= defensePower) {
	damage = 0;
}

lifesPoints -= damage;

alert(
    "Informações dos personagens atualizadas: \n \n" +
    characterAttack + 
    "\n Poder de ataque: " + attackPower +
    "\n \n " + characterDefense + 
    "\n  Pontos de vida: " + lifesPoints + 
    "\n  Poder de defesa: " + defensePower +
    "\n  Escudo: " + haveShield
);
