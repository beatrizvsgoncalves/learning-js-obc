function calculatePlanetValue(firstValue) {
    const planets = [firstValue, firstValue ** 2]

    for (let i = 2; i < 5; i++) {
        const planet = Math.pow(planets[i-1], 2) + Math.pow(planets[i-2], 2)
        planets.push(planet)
    }
    
    const value = planets[4].toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximunFractionDigits: 2
    })

    console.log(planets)
    console.log(`O valor númerico do quinto planeta é: ${value}`);
}

calculatePlanetValue(Math.floor(Math.random() * 9) + 1)