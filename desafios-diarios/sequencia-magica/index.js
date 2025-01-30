function initialize() {
    const sequence = []

    function createMagicSequence(array) {
        for (let i = 0; i < 10; i++) {
            const numRandom = Math.floor(Math.random() * 999) + 1
            array.push(numRandom)
        }
    }

    function sumDigits(num) {
        return num
            .toString()
            .split('')
            .map(Number)
            .reduce((acc, digit) => acc + digit, 0)
    }

    function sumDigitsArray() {
        return sequence.map(sumDigits)
    }

    const summedSequence = sumDigitsArray(createMagicSequence(sequence))

    function createMagicNumber() {
        const summedOrdenedSequence = [...summedSequence]
        summedOrdenedSequence.sort((a, b) => a - b)
        const magicNumber = summedOrdenedSequence[0]
        
        console.log(`
            Sequência Mágica: (${sequence.join(', ')})
            Sequência Somada: (${summedSequence.join(', ')})
            magicNumber: ${magicNumber}
        `)
    }
    createMagicNumber()
}

initialize()