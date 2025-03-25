class Wallet {
  #amount
  #username

  constructor() {
    this.#amount = 100.99 * 100 // 10099
  }

  get amount() {
    return this.#amount / 100
  }

  // getAmount() {
  //   return this.#amount / 100
  // }

  set username(newUsername) {
    if (typeof newUsername === 'string') {
      this.#username = newUsername
    } else {
      console.log('Username must be string type')
    }
  }

  get username() {
    return this.#username
  }
}

const myWallet = new Wallet()

console.log(myWallet.amount) // 100.99
// console.log(myWallet.getAmount()) // 100.99

myWallet.username = 'Beatriz'
console.log(myWallet.username) // Beatriz;

myWallet.username += ' Gonçalves'
console.log(myWallet.username) // Beatriz Gonçalves

myWallet.username = 123
console.log(myWallet.username) // Beatriz Gonçalves