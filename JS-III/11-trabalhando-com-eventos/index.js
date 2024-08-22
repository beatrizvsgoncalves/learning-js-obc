function register(ev /*evento*/) {
	console.log(ev);
    const sectionElement = ev.currentTarget.parentNode
	const username = sectionElement.children.username.value;
	const password = sectionElement.children.password.value;
	const passwordConfirmation =
		sectionElement.children.passwordConfirmation.value;

    if (password === passwordConfirmation) {
    alert('Usuário ' + username + ' registrado!')
    } else {
        alert('As senhas não conferem!')
    }
}

const button = document.getElementById('register-button');
button.addEventListener('click', register);

function removeListener() {
    button.removeEventListener('click', register)
    alert('Evento removido.')
}

button.addEventListener('mouseover', function (ev) {
    console.log(ev.currentTarget);
    console.log(ev.relatedTarget);
    console.log(ev.screenX);
    console.log(ev.screenY);
    console.log(ev.timeStamp);
    console.log(ev.type);
    console.log(ev.view);
})