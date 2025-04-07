const Calculadora = require('./Calculadora');

const calc = new Calculadora();

console.log(calc.somar(2, 3));
console.log(calc.subtrair(5, 2));
console.log(calc.multiplicar(3, 4));
console.log(calc.dividir(8, 2));
console.log(calc.dividir(8, 0)); // Deve lançar um erro