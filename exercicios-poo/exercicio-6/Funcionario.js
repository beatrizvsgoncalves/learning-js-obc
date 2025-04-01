module.exports = class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  salarioAnual() {
    return this.salario * 12;
  }
}