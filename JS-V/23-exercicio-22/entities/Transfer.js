// * Deverá possuir atributos para: o usuário que enviou a transferência, o que recebeu a transferência, o valor e a data de criação.
// todo: sender é uma instância de User

module.exports = class Transfer {
  constructor(sender, receiver, value) {
    this.sender = sender;
    this.receiver = receiver;
    this.value = value;
    this.creationDate = new Date();
  }
}