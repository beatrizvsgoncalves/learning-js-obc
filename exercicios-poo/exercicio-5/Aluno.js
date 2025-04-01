module.exports = class Aluno {
  constructor(nome, nota1, nota2) {
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }

  media() {
    return (this.nota1 + this.nota2) / 2;
  }
}