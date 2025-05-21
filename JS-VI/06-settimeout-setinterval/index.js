console.log('Program started');

const timeoutId = setTimeout(() => {
  console.log('3 seconds have passed since the program started');
}, 1000 * 3)

// dica: quebrar o tempo usando multiplicação para facilitar a leitura. ex: 1000 * 60 * 3 = 3 minutos

clearTimeout(timeoutId)
console.log('Timeout cancelled'); 

let seconds = 0

const intervalId = setInterval(() => {
  seconds += 3
  console.log(`Passed ${seconds} seconds since the program started`);
  if (seconds >= 10) {
    clearInterval(intervalId)
    console.log('Time is up! Ending the program.');
  }
}, 1000 * 3) // executa a cada 3 segundos
