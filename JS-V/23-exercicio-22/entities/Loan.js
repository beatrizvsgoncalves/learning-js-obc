// * Deverá possuir um atributo estático privado para a taxa de juros e que possuir um getter estático para ler o atributo privado e um setter estático para definir uma nova taxa de juros a partir de uma porcentagem. 

// todo: Deverá possuir os atributos para o valor do empréstimo e para a data de criação. 

// * Também deverá possuir um atributo para as parcelas do empréstimo, sendo que o construtor deve ter como parâmetro o número de parcelas e então deve calcular as parcelas (instâncias de Installments) e armazená-las nesse atributo.

module.exports = class Loan {
  static #interestRate = ((100 * 2) / 100);

  static get interestRate() {
    return this.#interestRate;
  }

  /** 
  *  @param {number} percentage
  */
  static set newInterestRate(percentage) {
    this.#interestRate = ((100 * percentage) / 100);
  }

  constructor(value, installmentsNumber) {
    this.value = value;
    this.creationDate = new Date();
    this.installments = value / installmentsNumber * Loan.#interestRate;
  }
}