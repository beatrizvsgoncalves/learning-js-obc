function sum(param, ...numbers) {
    return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1, 1, 4))
console.log(sum(15, 23, 97, 68))