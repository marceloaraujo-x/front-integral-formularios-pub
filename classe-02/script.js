const senha = document.querySelector('#senha');
const repetirSenha = document.querySelector('#repetir-senha');
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    if (senha.value !== repetirSenha.value) {
        event.preventDefault();
        return;
    }
})