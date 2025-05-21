// promise é um objeto que tem associado a ele uma função, e essa função é executada de forma assíncrona que devolverá um valor que poderemos manipular depois de finalizada.
// estados da promise:
// pendente - pending [estado inicial]
// resolvida - resolved
// rejeitada - rejected
// finalizada

const p = new Promise((resolve, reject) => {
  console.log('Promise is running');
  setTimeout(() => {
    if (true) {
      reject(false)
    }
    console.log('Resolving the promise...');
    resolve(true);
  }, 1000 * 2)
})

console.log(p)

setTimeout(() => {
  console.log(p)
}, 1000 * 3)