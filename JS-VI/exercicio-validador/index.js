const User = require('./User')

document.querySelector('form').addEventListener('submit', validation)

function validation(ev) {
  ev.preventDefault()

  const name = document.querySelector('#name')
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')

  const user = new User(name, email, password)

  validateEmail(ev)
  validatePassword()
}

function validateEmail(ev) {
  const emailRegex = ''
}

function validatePassword() {

}