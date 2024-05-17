const veiculo1 = prompt("Insira o nome de um veículo:")
const vel1 = Number(prompt("Qual a velocidade deste veículo?"))
const veiculo2 = prompt("Insira o nome de outro veículo:")
const vel2 = Number(prompt("Qual a velocidade deste veículo?"))

if (vel1 > vel2) {
    alert(`O veículo ${veiculo1} é mais rápido que o veículo ${veiculo2}.`)
} else if (vel2 > vel1) {
    alert(`O veículo ${veiculo2} é mais rápido que o veículo ${veiculo1}.`)
} else {
    alert("Ambos os veículos possuem a mesma velocidade.")
}