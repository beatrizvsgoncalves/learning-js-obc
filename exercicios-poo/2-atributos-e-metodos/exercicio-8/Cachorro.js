module.exports = class Cachorro {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }

  latir() {
    console.log('Au Au')
  }
}