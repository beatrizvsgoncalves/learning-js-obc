const Produto = require("./Produto");

const caneta = new Produto('Caneta Bic Preta', 2.50)
const caderno = new Produto('Caderno Tilibra Skatista', 29.99)
const mochila = new Produto('Mochila Preta', 55.90)

const total = (caneta.preco + caderno.preco + mochila.preco).toFixed(2)

console.log(`Total do carrinho: R$${total}`)