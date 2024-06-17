function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2))
}

// dobro(5)

// let num = Number(prompt("Digite um número:")) 
// dobro(num)

function dizerOla(nome = "mundo") {
    alert("Olá, " + nome + "!")
}

// dizerOla("Beatriz")
// dizerOla()

function soma(a, b) {
    alert("O resultado da soma é " + (a + b))
}

// soma(9, 7)

function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome, // mesmo que nome: nome 
        email,
        senha,
        tipo
    }

    console.log(usuario)
}

function novoUsuario(nome, tipo = "admin", email, senha) { // para usar valores padrões em que se omite na chamada é necessário declará-los apenas no final, senão dá esse tipo de erro.
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }

    console.log(usuario)
}

// criarUsuario("Beatriz", "beatriz@email.com", "1234")
// novoUsuario("Beatriz", "beatriz@email.com", "1234")

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
    //...
}

muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")

function objetoComoParametro(usuario) {
    //...
    usuario.nome
    usuario.email
}

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    endereco: "",
    aniversario: "",
    email: "",
    senha: ""
}

objetoComoParametro(dadosDoUsuario)