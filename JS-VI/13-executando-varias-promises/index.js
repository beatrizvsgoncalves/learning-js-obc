/*function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      reject(new Error('Arguments must be of type numbers.'))
    } else {
      resolve(a + b)
    }
  })
}

function asyncSubtract(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      reject(new Error('Arguments must be of type numbers.'))
    } else {
      resolve(a - b)
    }
  })
}

const sumResult = asyncSum(32, 75)
const subtractResult = asyncSubtract(11, 63)

Promise.all([sumResult, subtractResult])
  .then(results => {
    console.log('Results:', results)
  })
  .catch(error => {
    console.error('Error!', error.message)
  })
*/
const numbers = ['9', 7, 13, 12, 5]

function asyncSquare(x) {
  return new Promise((resolve, reject) => {
    if (typeof x !== 'number') {
      reject(new Error('Argument must be of type number.'))
    } else {
      resolve(x * x)
    }
  })
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
  console.log('Squares:', squares)
}).catch(error => {
  console.error('Error!', error.message)
})