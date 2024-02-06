window.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('formularioSaludo');
    var mensajeSaludo = document.getElementById('mensajeSaludo');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        var nombre = document.getElementById('nombre').value;
        var edad = document.getElementById('edad').valueAsNumber;
        mensajeSaludo.innerText = "\u00A1Hola, ".concat(nombre, "! Tienes ").concat(edad, " a\u00F1os.");
    });
});
