const a = 0 // false

const b = null // false

const c = "Teste" // true

console.log(a || b || c) // -> curto-circuito

console.log(a ?? b ?? c)
//

let d = 0

let e = d || 42

console.log({ d, e });

e = d ?? 42

console.log({ d, e });

let f = false ?? 42

console.log({ f });