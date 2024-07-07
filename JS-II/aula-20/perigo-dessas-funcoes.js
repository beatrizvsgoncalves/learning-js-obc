olaMundo()
// oiMundo() -->  Gera erro, pois funções anônimas só podem ser chamadas e acessadas depois de sua declaração/inicialização.

function olaMundo() {
    console.log("Olá, mundo!");
}

const oiMundo = function () {
    console.log("Oi, mundo!")
}

oiMundo()