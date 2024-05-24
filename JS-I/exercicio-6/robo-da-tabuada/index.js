let num = Number(prompt("TABUADA \n\n Digite um número: "))
let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
    resultado += " -> " + num + " * " + fator + " = " + (num * fator) + "\n"
}

alert("Resultado da tabuada de " + num + "\n\n" + resultado);  
