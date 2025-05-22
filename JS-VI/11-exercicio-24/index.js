function calculateImc(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight !== 'number' || typeof height !== 'number' ) {
      reject('Valor inválido');
    } else {
      resolve(weight / (height * height));
    }
  })
}

function showImc(weight, height) {
  calculateImc(weight, height)
    .then((result) => {
      console.log(`O resultado do IMC é de ${result.toFixed(1)}`);

      if (result < 18.5) console.log('Situação: Magreza');
      else if (result < 25) console.log('Situação: Normal');
      else if (result < 30) console.log('Situação: Sobrepeso');
      else if (result < 40) console.log('Situação: Obesidade');
      else console.log('Situação: Obesidade grave');
    })
    .catch((error) => {
      console.log(error);
    })

    console.log(`Calculando o IMC para peso ${weight} e altura ${height.toFixed(2)}`);
}

showImc(20, 1.20); // Magreza
showImc(72, 1.75); // Normal
showImc("texto", 2.00); // Valor inválido
showImc(119, 1.80); // Obesidade
showImc(143, 1.56); // Obesidade Grave