function execute() {
  return new Promise((resolve, reject) => {
    console.log('The promise is being executed');
    setTimeout(() => {
      if (false) {
        reject(false);
      } else {
        console.log('Resolving the promise...');
        resolve(42);
      }
    }, 1000 * 2)
  })
}

execute().then((result) => {
  console.log(`The promise was resolved. Result: ${result}`);
}).catch((error) => {
  console.log(`The promise was rejected. Reason: ${error}`);
}).finally(() => {
  console.log('The promise was finished.');
})