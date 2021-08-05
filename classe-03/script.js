const genero = document.querySelector("select");
const musica = document.querySelector("input");

genero.addEventListener("change", function (event) {
    musica.value = event.target.value
})