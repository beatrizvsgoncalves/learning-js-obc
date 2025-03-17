function decodingPassword() {
    const array = createArray()
    const password = []
    for (let i = 1; i < array.length; i++) {
        const startIndex = i
        const sum = sumArrayFromIndex(array, startIndex)
        password.push(sum)
    }
    password[password.length] = 0
    
    console.log({ array, password });
}
decodingPassword()

function createArray() {
    const array = []
    for (let i = 0; i < 4; i++) {
        const numRandom = Math.floor(Math.random() * 9) + 1
        array.push(numRandom)
    }
    return array
}

function sumArrayFromIndex(arr, startIndex) {
    let sum = 0
    for (let i = startIndex; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}