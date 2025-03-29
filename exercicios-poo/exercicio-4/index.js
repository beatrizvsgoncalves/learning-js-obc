const Livro = require("./Livro");

const livro1 = new Livro('Jogos Vorazes', 'Suzanne Collins')
const livro2 = new Livro('Silo', 'Howey Hugh')
const livro3 = new Livro('Maze Runner: Correr ou Morrer', 'James Dashner')

console.log(`${livro1.autor}, ${livro2.autor} e ${livro3.autor}`)