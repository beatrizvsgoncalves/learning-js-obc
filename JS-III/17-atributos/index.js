const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
    input.value = input.value === '' ? 'Olá, mundo!' : ''

    // input.value = 'Olá, mundo!'
    // <input value="Texto inicial">
    console.log(input.value); // valor em tempo real = 'Olá, mundo!'
    //console.log(input.getAttribute('value')) // valor predefinido no html = "Texto inicial"
})

document.getElementById('type').addEventListener('click', function () {
    input.type = input.type !== 'radio' ? 'radio' : 'text'
    //input.setAttribute('type', 'radio') // só muda uma única vez, não serve para alternar
})

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click', function () {
    input.setAttribute('disabled', !input.disable) // desabilita o input
})

document.getElementById('data').addEventListener('click', function () {
    const data = input.dataset.somethingElse // dataset abrange todos os atributos data
    console.log("O valor do atributo data-something-else é: " + data);
    input.dataset.somethingElse = 'Algum outro valor'
    console.log("O valor do atributo data-something-else agora é: " + input.dataset.somethingElse);
})