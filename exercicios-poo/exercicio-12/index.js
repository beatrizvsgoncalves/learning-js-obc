const Produto = require('./Produto');

const produto1 = new Produto('Produto 1', 129.99);
const produto2 = new Produto('Produto 2', 73.50);
const produto3 = new Produto('Produto 3', 49.10);

produto1.desconto(20); // O preço com desconto é: R$ 103.99
produto2.desconto(10); // O preço com desconto é: R$ 66.15
produto3.desconto(5); // O preço com desconto é: R$ 46.65