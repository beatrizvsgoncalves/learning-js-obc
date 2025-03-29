const App = require("./App")

App.createUser("beatriz@email.com", "Beatriz Gonçalves")
App.createUser("jane@email.com", "Jane Doe")
App.createUser("john@email.com", "John Doe")

App.deposit("beatriz@email.com", 100)

App.transfer("beatriz@email.com", "jane@email.com", 35)

App.changeLoanFee(10)

App.takeLoan("john@email.com", 2000, 20)
App.takeLoan("john@email.com", 1000, 12)

App.payLoan("john@email.com", 2000)
App.payLoan("john@email.com", 2000)
App.payLoan("john@email.com", 1000)


console.log(App.findUser("beatriz@email.com"))
console.log(App.findUser("beatriz@email.com").account)
console.log(App.findUser("jane@email.com"))
console.log(App.findUser("jane@email.com").account)
console.log(App.findUser("john@email.com"))
console.log(App.findUser("john@email.com").account)
console.log(App.findUser("john@email.com").account.loans[0].installments)
console.log(App.findUser("john@email.com").account.loans[1].installments)