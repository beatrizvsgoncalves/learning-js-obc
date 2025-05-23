async function asyncSum(a, b) {
  return a + b
}

async function asyncSubtract(a, b) {
  return a - b
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


const numbers = ['9', 7, 13, 12, 5]

async function asyncSquare(x) {
  return x * x
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
  console.log('Squares:', squares)
}).catch(error => {
  console.error('Error!', error.message)
})