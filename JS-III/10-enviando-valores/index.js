function register(element) {
    let username = element.children.username.value
    let password = element.children.password.value
    let passwordConfirmation = element.children.passwordConfirmation.value
    
    if (password === passwordConfirmation) {
        alert("Usuário " + username + " registrado!")
    } else {
        alert("As senhas não conferem!")
    }
}