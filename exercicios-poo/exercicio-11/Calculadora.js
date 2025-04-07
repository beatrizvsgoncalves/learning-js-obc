module.exports = class Calculadora {
  somar(a, b) {
    return a + b;
  }

  subtrair(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (a === 0 || b === 0) {
      const err = new Error("Não é possível dividir por zero")
      return err.message
    } else {
      return a / b;
    }
  }
}