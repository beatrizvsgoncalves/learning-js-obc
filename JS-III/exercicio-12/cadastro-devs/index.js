const form = document.querySelector('#registerForm')

form.addEventListener('submit', function (ev) {
    ev.preventDefault()


})

const buttonNewTecnology = document.querySelector('button#add-tecnology')
buttonNewTecnology.addEventListener('click', function () {
    const sectionInputs = document.querySelector('section#inputs')

    const labelTecnology = document.createElement('label')
    labelTecnology.for = 'tecnology'
    labelTecnology.innerText = "Tecnologia: "
    const inputTecnology = document.createElement('input')
    inputTecnology.type = 'text'
    inputTecnology.name = 'tecnology'

    sectionInputs.appendChild(document.createElement('br'))
    sectionInputs.append(labelTecnology, inputTecnology)
    sectionInputs.appendChild(document.createElement('br'))

    const labelExperience = document.createElement('label')
    labelExperience.for = 'experience'
    labelExperience.innerText = "Tempo de experiência:"

    const inputExp1 = document.createElement('input')
    inputExp1.type = 'radio'
    inputExp1.name = 'experience'
    inputExp1.id = 'experience1'
    inputExp1.value = '0-2 anos'
    const labelExp1 = document.createElement('label')
    labelExp1.for = 'experience1'
    labelExp1.innerText = '0-2 anos'

    const inputExp2 = document.createElement('input')
    inputExp2.type = 'radio'
    inputExp2.name = 'experience'
    inputExp2.id = 'experience2'
    inputExp2.value = '0-2 anos'
    const labelExp2 = document.createElement('label')
    labelExp2.for = 'experience2'
    labelExp2.innerText = '3-4 anos'
    
    const inputExp3 = document.createElement('input')
    inputExp3.type = 'radio'
    inputExp3.name = 'experience'
    inputExp3.id = 'experience3'
    inputExp3.value = '0-2 anos'
    const labelExp3 = document.createElement('label')
    labelExp3.for = 'experience3'
    labelExp3.innerText = '5+ anos'
    
    sectionInputs.appendChild(document.createElement('br'))
    sectionInputs.appendChild(labelExperience) 
    sectionInputs.append(
        inputExp1, labelExp1, 
        inputExp2, labelExp2, 
        inputExp3, labelExp3
    )
    sectionInputs.appendChild(document.createElement('br'))

    const buttonRemove = document.createElement('button') 
    buttonRemove.innerText = "Cancelar"
    buttonRemove.addEventListener('click', function () {
        sectionInputs.remove()
    })

    sectionInputs.appendChild(document.createElement('br'))
    sectionInputs.appendChild(buttonRemove)
})