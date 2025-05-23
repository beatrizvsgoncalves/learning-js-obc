async function calculateImc(weight, height) {
  if (typeof weight !== 'number' || typeof height !== 'number' ) {
    return Promise.reject(new Error('Valor inválido'));
  }
  return weight / (height * height);
}

async function showImc(weight, height) {
  try {  
    const result = await calculateImc(weight, height)
    
    console.log(`\nCalculando IMC de: ${weight}kg(peso) e ${height.toFixed(2)}m(altura)`);
    
    console.log(`O resultado do IMC é de ${result.toFixed(1)}`);
    
    if (result < 18.5) console.log('Situação: Magreza');
    else if (result < 25) console.log('Situação: Normal');
    else if (result < 30) console.log('Situação: Sobrepeso');
    else if (result < 40) console.log('Situação: Obesidade');
    else console.log('Situação: Obesidade grave');
  } catch (error) {
    console.log(`\n${error.message}`);
  }
}

showImc(20, 1.20); // Magreza
showImc(72, 1.75); // Normal
showImc("texto", 2.00); // Valor inválido
showImc(119, 1.80); // Obesidade
showImc(143, 1.56); // Obesidade Grave