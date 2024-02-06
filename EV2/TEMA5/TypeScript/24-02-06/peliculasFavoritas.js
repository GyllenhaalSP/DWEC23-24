var peliculas = [];
window.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('formularioPelicula');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        var titulo = document.getElementById('titulo').value;
        var ano = parseInt(document.getElementById('ano').value);
        var genero = document.getElementById('genero').value;
        peliculas.push([titulo, ano, genero]);
        mostrarPeliculas();
    });
});
function mostrarPeliculas() {
    var lista = document.getElementById('listaPeliculas');
    lista.innerHTML = '';
    peliculas.forEach(function (pelicula) {
        var elemento = document.createElement('li');
        elemento.textContent = "T\u00EDtulo: ".concat(pelicula[0], ", A\u00F1o: ").concat(pelicula[1], ", G\u00E9nero: ").concat(pelicula[2]);
        lista.appendChild(elemento);
    });
}
