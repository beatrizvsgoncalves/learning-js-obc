function calculateJourney(array, energy) {
    console.log(`Energia necessária para a Jornada: [${array.join(' - ')}]`)    
    console.log(`Energia inicial: ${energy}`)

    for (let i = 0; i < array.length; i++) {
        energy -= array[i]
        console.log(`Energia atual: ${energy}`)
    }

    if(energy >= 1) {
        return true
    } else {
        return false
    }
}

function createArray() {
    const arrayEnergy = []
    
    for (let i = 0; i < 5; i++) {
        const numRandom = Math.floor(Math.random() * 9) + 1
        arrayEnergy.push(numRandom)
    }
    
    return arrayEnergy
}

console.log(calculateJourney(createArray(), 25))