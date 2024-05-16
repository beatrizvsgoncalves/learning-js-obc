let nome = "Beatriz"
let sobrenome = window.prompt("Insira o seu sobrenome:")
let confirmacao = window.confirm(`Seu nome é ${nome} ${sobrenome}?`)

console.log(confirmacao);

if (confirmacao == true) {
    window.alert(`Muito prazer ${nome} ${sobrenome}!`)
} else {
    console.error("Algo deu errado");
    console.warn(nome);
}

