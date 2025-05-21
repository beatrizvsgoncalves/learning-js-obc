function execute() {
  return new Promise((resolve, reject) => {
    console.log('Promise is running');
    setTimeout(() => {
      console.log('Resolving the promise...');
      resolve('Result');
    }, 1000)
  })
}

const p = execute()

console.log(p)

setTimeout(() => {
  console.log(p)
}, 2000)