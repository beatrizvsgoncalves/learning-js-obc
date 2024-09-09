document.getElementById('button').addEventListener('click', function () {
    const sectionPlayers = document.querySelector('section')
    const player1Name = document.getElementById('player1').value
    const player2Name = document.getElementById('player2').value
    let playing = player1Name

    let victoryCombinations = [
        ['1', '2', '3'],
        /* ['1', '3', '2'],
        ['2', '1', '3'],
        ['2', '3', '1'],
        ['3', '1', '2'],
        ['3', '2', '1'], */
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['3', '6', '9'],
        ['1', '5', '9'],
        ['3', '5', '7']
    ]
    let victory = undefined
    
    if (player1Name !== '' && player2Name !== '') {
        do {
            sectionPlayers.innerText = player1Name
            sectionPlayers.style.fontSize = '2.2rem'
            sectionPlayers.style.textTransform = 'uppercase'
            sectionPlayers.style.transform = '2s'
            let player1Combination = []
            let player2Combination = []
            
            
            document.querySelectorAll('.box').forEach(function (box) {
                box.addEventListener('click', function () {
                    if (playing === player1Name) {
                        box.classList.add('x')
                        playing = player2Name
                        sectionPlayers.innerText = player2Name
                        player1Combination.push(box.dataset.value)
                        
                        console.log(player1Combination)
                    } else {
                        box.classList.add('circle')
                        playing = player1Name
                        sectionPlayers.innerText = player1Name
                        player2Combination.push(box.dataset.value)

                        console.log(player2Combination)
                    }
                })
            })

            let result = victoryCombinations.forEach(function (array) {
                array.includes(player1Combination)
            })

            console.log(result);
            
            if (result) {
                
            }
        } while (victory === undefined)
    } else {
        alert('Preencha os campos!')
    }
})