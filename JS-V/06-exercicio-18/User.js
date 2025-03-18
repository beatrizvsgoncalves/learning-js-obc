class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (this.email === email && this.password === password){
      console.log('Usuário logado!');
    } else {
      console.log('Email ou senha incorretos.');
    }
  }
}

const jane = new User('Jane Doe', 'jane@email.com', '1234');

jane.login('jane@email.com', '1234')