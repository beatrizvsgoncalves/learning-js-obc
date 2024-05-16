let nome = prompt("Qual é o seu primeiro nome?")
let sobrenome = prompt("E o seu sobrenome?")
let campoEstudo = prompt("Qual seu campo de estudo?")
let anoNascimento = prompt("Em que ano você nasceu?")

const data = new Date()
const anoAtual = data.getFullYear()
let idade = anoAtual - anoNascimento

let resNome = document.querySelector("span#nome")
let resSobrenome = document.querySelector("span#sobrenome")
let resEstudo = document.querySelector("span#estudo")
let resIdade = document.querySelector("span#ano-nasc")

resNome.innerHTML = `${nome}` 
resSobrenome.innerHTML = `${sobrenome}`
resEstudo.innerHTML = `${campoEstudo}`
resIdade.innerHTML = `${idade}`