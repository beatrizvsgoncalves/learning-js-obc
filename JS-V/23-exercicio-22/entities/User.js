// * Deve possuir atributos para nome completo, email e conta.

module.exports = class User {
  constructor(name, email, account) {
    this.name = name;
    this.email = email;
    this.account = account;
  }
}