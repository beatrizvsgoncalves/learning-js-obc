const nome = prompt("E aí, turista! Vamos montar seu cartão de turismo. \n \n Primeiro, digite seu nome:")
let continuar = prompt("Você visitou alguma cidade? [s/n]")
let contagem = 0
let cidades = ""

while (continuar === 's'){
        let cidade = prompt("Qual o nome da cidade?")
        cidades += "   - " + cidade + "\n"
        contagem++
        continuar = prompt("Você visitou alguma outra cidade? [s/n]")
}

alert(
    "CARTÃO DE TURISTA \n" + 
    "\n Nome: " + nome +
    "\n Quantidade de cidades visitadas: " + contagem +
    "\n Cidades visitadas: \n" + cidades
)