let metro = Number(prompt("Digite o número em metro a ser convertido:"));
let medidaAConverter = prompt(
	"Escolha a que medida será convertido: (abreviações) \n \n 1. milímetro (mm) \n 2. centímetro (cm) \n 3. decímetro (dm) \n 4. decâmetro (dam) \n 5. hectômetro (hm) \n 6. quilômetro (km)"
);

switch (medidaAConverter) {
	case "mm":
		metro *= 1000;
        alert("Resultado da conversão: " + metro + medidaAConverter);
		break;
	case "cm":
		metro *= 100;
        alert("Resultado da conversão: " + metro + medidaAConverter);
		break;
	case "dm":
		metro *= 10;
        alert("Resultado da conversão: " + metro + medidaAConverter);
		break;
	case "dam":
		metro /= 10;
        alert("Resultado da conversão: " + metro + medidaAConverter);
		break;
	case "hm":
		metro /= 100;
        alert("Resultado da conversão: " + metro + medidaAConverter);
		break;
	case "km":
		metro /= 1000;
        alert("Resultado da conversão: " + metro + medidaAConverter);
		break;
	default:
		alert("Opção inválida. Tente novamente.");
        window.location.reload()
}
