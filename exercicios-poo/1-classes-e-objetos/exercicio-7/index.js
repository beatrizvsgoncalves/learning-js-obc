const ContaBancaria = require('./ContaBancaria')

const conta1 = new ContaBancaria('Beatriz', 2000, 1)

console.log(conta1)
conta1.depositar(749)
console.log(conta1)