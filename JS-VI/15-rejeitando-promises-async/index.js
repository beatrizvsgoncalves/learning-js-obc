async function asyncSum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return Promise.reject(new Error('sum arguments must be of the number type.'))
  } else {
    return a + b
  }
}

async function asyncSubtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return Promise.reject(new Error('subtraction arguments must be of the number type.'))
  } else {
    return a - b
  }
}

const sumResult = asyncSum(32, 75)
const subtractResult = asyncSubtract(84, 63)

Promise.all([sumResult, subtractResult]).then(results => {
  console.log('Results:', results)
}).catch(error => {
  console.error('Error:', error.message)
})
