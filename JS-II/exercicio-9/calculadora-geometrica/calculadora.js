let opcao = ""

do {
    opcao = prompt(
        "CALCULADORA GEOMÉTRICA\n" +
        "\nEscolha uma das opções de cálculo abaixo:\n" +
        "\n1. Área do triângulo" +
        "\n2. Área do retângulo" +
        "\n3. Área do quadrado" +
        "\n4. Área do trapézio" +
        "\n5. Área do círculo" +
        "\n6. Sair"
    )

    function areaTriangulo(base, altura) {
        base = Number(prompt("Insira o valor da base do triângulo:"))
        altura = Number(prompt("Insira o valor da altura do triângulo:"))
        alert("A área de um triângulo com a base de '" + base + "' e a altura de '" + altura + "' é: " + (base * altura / 2))
    }
    
    function areaRetangulo(base, altura) {
        base = Number(prompt("Insira o valor da base do retângulo:"))
        altura = Number(prompt("Insira o valor da altura do retângulo:"))
        alert("A área de um retângulo com a base de '" + base + "' e a altura de '" + altura + "' é: " + (base * altura))
    }

    function areaQuadrado(lado, lado) {
        lado = Number(prompt("Insira o valor dos lados do quadrado:"))
        alert("A área de um quadrado com os lados medindo '" + lado + "' é: " + (lado * lado))
    }
    
    function areaTrapezio(baseMaior, baseMenor, altura) {
        baseMaior = Number(prompt("Insira o valor da base maior do trapézio:"))
        baseMenor = Number(prompt("Insira o valor da base menor do trapézio:"))
        altura = Number(prompt("Insira o valor da altura do trapézio:"))
        alert("A área de um trapézio com a base maior medindo '" + baseMaior + "', a base menor '" + baseMenor + "' e a altura '" + altura + "', é: " + ((baseMaior + baseMenor) * altura / 2))
    }

    function areaCirculo(raio, pi = 3.14) {
        raio = Number(prompt("Insira valor do raio do circulo:"))
        alert("A área de um circulo com o raio de '" + raio + "' é: " + (pi * (raio * raio)))
    }

    switch (opcao)  {
        case "1":
            areaTriangulo()
            break
        case "2":
            areaRetangulo()
            break
        case "3":
            areaQuadrado()
            break
        case "4":
            areaTrapezio()
            break
        case "5":
            areaCirculo()
            break
        case "6":
            alert("Encerrando programa...")
            break
        default:
            alert("Opção inválida! Escolha entre as opções 1-6.")
    }

} while (opcao !== "6")