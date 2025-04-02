module.exports = class Carro {
  constructor(modelo) {
    this.modelo = modelo;
    this.velocidade = 0;
  }

  acelerar(v) {
    this.velocidade += v
    console.log(`O carro ${this.modelo} acelerou e agora está andando a ${this.velocidade} km/h.`)
  }

  frear(v) {
    this.velocidade -= v
    console.log(`O carro ${this.modelo} freou e agora está andando a ${this.velocidade} km/h.`)
  }
}