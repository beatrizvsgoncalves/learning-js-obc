module.exports = class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  desconto(porcentagem) {
    const precoComDesconto = (this.preco * porcentagem) / 100;
    console.log(`O preço com desconto é: R$ ${(this.preco - precoComDesconto).toFixed(2)}`);
  }
}