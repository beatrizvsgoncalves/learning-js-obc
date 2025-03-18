class Account {
  #password;
  #balance = 0;

  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return "Credenciais inválidas";
    }
  }

  #authenticate(email, password) {
    return email === this.email && password === this.#password;
  }
}

const user = {
  email: "john.doe@example.com",
  password: "password123"
}

const myAccount = new Account(user);

console.log(myAccount)
console.log(myAccount.getBalance("john.doe@example.com", "password123"))