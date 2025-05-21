function calculateIMC(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight !== 'number' || typeof height !== 'number' ) {
      reject('Valor inválido');
    } else {
      const imc = weight / (height * height);
      resolve(imc);
    }
  })
}

function execute(weight, height) {
  console.log(`Peso: ${weight}kg`);
  console.log(`Altura: ${height}`);
  console.log('Cálculo do IMC iniciado...');

  let imcValue = undefined;

  calculateIMC(weight, height).then((imc) => {
    imcValue = imc
    console.log(`O IMC é de ${imc.toFixed(1)}`);
  }).catch((error) => {
    console.log(`Erro: ${error}`);
  }).finally(() => {
    if (imcValue < 18.5) {
      console.log('Categoria do IMC: Magreza');
    } else if (imcValue >= 18.5 && imcValue < 24.9) {
      console.log('Categoria do IMC: Normal');
    } else if (imcValue >= 25 && imcValue < 29.9) {
      console.log('Categoria do IMC: Sobrepeso');
    } else if (imcValue >= 30 && imcValue < 39.9) {
      console.log('Categoria do IMC: Obesidade');
    } else if (imcValue >= 40) {
      console.log('Categoria do IMC: Obesidade grave');
    }
  })

  console.log('Cálculo do IMC finalizado!');
}

execute(70, 1.75);