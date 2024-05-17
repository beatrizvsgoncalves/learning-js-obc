const n1 = Number(prompt("Digite um número: "))
const n2 = Number(prompt("Digite outro número: "))

let soma = n1 + n2
let subtracao = n1 - n2
let multiplicacao = n1 * n2
let divisao = n1 / n2

const res = document.querySelector("div#res")
res.innerHTML = `
<p>${n1} + ${n2} = <strong>${soma}</strong></p>
<p>${n1} - ${n2} = <strong>${subtracao}</strong></p>
<p>${n1} * ${n2} = <strong>${multiplicacao}</strong></p>
<p>${n1} / ${n2} = <strong>${divisao}</strong></p>
`