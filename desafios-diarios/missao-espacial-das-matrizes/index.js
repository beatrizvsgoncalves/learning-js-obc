const planetsData = [
    ['Terra', 2072, 0],
    ['Marte', 1448, 225],
    ['Júpiter', 61419, 588],
    ['Saturno', 42700, 1200],
    ['Planeta-X', 950, 3200]
]

function filterPlanets() {
    const planetsFiltered = planetsData.filter(planet => planet[1] > 1000 && planet[2] < 3000 && planet[2] !== 0)
    
    const planetsName = planetsFiltered.map(planet => planet[0])

    console.log(planetsName)
}

filterPlanets()