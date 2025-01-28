function redistribuirCombustivel(combustivel) {
    const soma = combustivel.reduce((accum, num) => accum + num)
    const media = Math.floor(soma / combustivel.length)
    const decimal = Math.floor(((soma / combustivel.length) - media) * 5)

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
        combustivel[combustivel.length-1] += decimal
    }

    console.log(combustivel)
}

const combustivel = [12, 5, 8, 5, 6] 
redistribuirCombustivel(combustivel)