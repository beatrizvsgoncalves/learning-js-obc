do {
    var escolha = prompt(
    "Escoha uma opção: " +
    "\n [1] Opção" + 
    "\n [2] Opção" + 
    "\n [3] Opção" + 
    "\n [4] Opção" + 
    "\n [5] Encerrar" 
    )

    switch (escolha) {
        case '1': 
            alert("Opção 1")
            break
        case '2': 
            alert("Opção 2")
            break
        case '3': 
            alert("Opção 3")
            break
        case '4': 
            alert("Opção 4")
            break
        case '5': 
            alert("Encerrando...")
            break
        default: 
            alert("Opção inválida")
    }
} while (escolha !== '5')
