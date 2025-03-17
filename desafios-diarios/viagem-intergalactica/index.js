function redistribuirCombustivel(combustivel) {
    const soma = combustivel.reduce((accum, num) => accum + num)
    let media = Math.floor(soma / combustivel.length)
    let decimal = Math.floor(((soma / combustivel.length) - media) * combustivel.length)
    
    let excesso = 0
    let falta = 0

    for (i in combustivel) {
        if (combustivel[i] > media) {
            excesso = combustivel[i] - media
            combustivel[i] -= excesso
        } else if (combustivel[i] < media) {
            falta = media - combustivel[i]
            combustivel[i] += falta
        }
        
        if (decimal >= 1) {
            combustivel[i]++
            decimal--
        }
    }

    console.log(combustivel)
}

const combustivel = [12, 5, 8, 3, 6] 
redistribuirCombustivel(combustivel)