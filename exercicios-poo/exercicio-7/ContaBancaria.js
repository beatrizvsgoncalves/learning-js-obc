module.exports = class ContaBancaria {
  constructor(titular, saldo, numero) {
    this.titular = titular;
    this.saldo = saldo;
    this.numero = numero;
  } 

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de ${valor} realizado com sucesso.`);
    } else {
      console.log('Valor inválido para depósito.');
    }
  }
}