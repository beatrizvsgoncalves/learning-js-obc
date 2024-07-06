function dividir(num) {
    console.log(num)

    if (num % 2 === 0) {
        dividir(num / 2)
    } else {
        return num
    }
}

dividir(8)

function dobrar(num) {
    console.log(num)
    dobrar(num * 2)
}

// dobrar(1) A função é chamada até estourar o limite de chamada

function fatorial(num) {
    console.log("num = " + num)
    if (num === 0) { // caso base
        return 1
    } else if (num === 1) { // caso base
        return 1
    } else {
        console.log(num + " * !" + (num - 1) );
        return num * fatorial(num - 1)
    }
}

console.log("\n!5 = " + fatorial(5))
console.log("\n!0 = " + fatorial(0))
console.log("\n!9 = " + fatorial(9))