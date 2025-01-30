function initialize() {
    const magicNumber = Math.floor(Math.random() * 20) + 1
    const sequence = []

    function createMagicSequence(array) {
        for (let i = 0; i < 10; i++) {
            const numRandom = Math.floor(Math.random() * 99) + 1
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

    function findMagicNumber() {
        let magicNumberFound = undefined
        let magicNumberOriginal = undefined

        for (let i = 0; i <= summedSequence.length; i++) {
            if (summedSequence[i] === magicNumber) {
                magicNumberFound = summedSequence[i]
                magicNumberOriginal = sequence[i]
            }
        }

        if (magicNumberFound === magicNumber) {
            let mNString = magicNumberOriginal.toString()
            let msg = mNString === false ? `)` : ` + ${mNString.charAt(1)})` 
            
            console.log(`
                VALOR MÁGICO ENCONTRADO!!!
                
                Valor Mágico: ${magicNumber} -> ${magicNumberOriginal} (Soma dos dígitos: ${mNString.charAt(0)}${msg}
                Sequência Mágica: (${sequence.join(', ')})
                Sequência Somada: (${summedSequence.join(', ')})
            `)
        } else {
            console.log(`
                Valor Mágico não encontrado :(

                Valor Mágico: ${magicNumber}
                Sequência Mágica: (${sequence.join(', ')})
                Sequência Somada: (${summedSequence.join(', ')})
            `)
        }
    }
    findMagicNumber()
}

initialize()