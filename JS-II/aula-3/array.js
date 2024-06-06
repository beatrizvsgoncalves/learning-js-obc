const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr);

// Adicionar Elementos

    // push  -  adiciona no final e retorna o novo tamanho do array
    let tamanho = arr.push("Boromir")
    console.log(arr);
    console.log(tamanho);

    // unshift  -  adiciona no início e retorna o novo tamanho do array
    tamanho = arr.unshift("Teste")
    console.log(arr);
    console.log(tamanho)

// Remover Elementos

    // pop  -  remove o ultimo elemento e retorna ele 
    let ultimoElemento = arr.pop()
    console.log(arr);
    console.log(ultimoElemento);

    // shift  -  remove o primeiro elemento e retorna ele
    ultimoElemento = arr.shift()
    console.log(arr);
    console.log(ultimoElemento);

// Pesquisar por um Elemento

    // includes  -  pesquisa se dentro do array existe certo elemento e retorna um valor booleano
    const inclui = arr.includes("Gandalf")
    console.log(inclui);

    // indexOf  -  pesquisa se dentro do array existe certo elemento e retorna o índice
    const indice = arr.indexOf("Gandalf")
    console.log(indice);

// Cortar e Concatenar Arrays

    // slice  -  faz uma cópia dos elementos pedidos
    const hobbits = arr.slice(0, 4) // lê-se: copia os elementos a partir do índice 0 até antes do índice 4. 
    const outros = arr.slice(-4) // lê-se: copia os elementos a partir do quarto último número até o final do array (quando o final do corte está omitido automaticamente copia até o final)
    console.log(arr);
    console.log(hobbits);
    console.log(outros);

    // concat  -  faz cópia e junta arrays e adiciona mais valores
    const sociedade = hobbits.concat(outros, "Boromir")
    console.log(sociedade);

// Substituição dos Elementos

    // splice  -  remove um grupo de elemento e substitui por outro 
    const a = sociedade.splice