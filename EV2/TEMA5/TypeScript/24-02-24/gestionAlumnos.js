var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad, tit) {
        this.nombre = nombre;
        this.edad = edad;
        this.tit = tit;
    }
    Alumno.prototype.mostrarInfo = function () {
        return "\tNombre: ".concat(this.nombre, "\n\tEdad: ").concat(this.edad, "\n\tTitulaci\u00F3n: ").concat(this.tit, "\n");
    };
    return Alumno;
}());
var alumnos = [];
window.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('formularioAlumno');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        agregarAlumno();
    });
});
function agregarAlumno() {
    var nombre = document.getElementById('nombre').value;
    var edad = parseInt(document.getElementById('edad').value);
    var titulacion = document.getElementById('titulacion').value;
    var alumno = new Alumno(nombre, edad, titulacion);
    alumnos.push(alumno);
    // cómo limpio el formulario?
    actualizarListaAlumnos();
}
function actualizarListaAlumnos() {
    var lista = document.getElementById('listaAlumnos');
    if (!lista) {
        console.error('Elemento #listaAlumnos no encontrado');
        return;
    }
    lista.innerHTML = '';
    alumnos.forEach(function (alumno, index) {
        var infoAlumno = document.createElement('div');
        infoAlumno.innerHTML = "Alumno ".concat(index + 1, ": <br>");
        infoAlumno.innerHTML += "".concat(alumno.mostrarInfo().replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;').replace(/\n/g, '<br>'), "<br>");
        lista.appendChild(infoAlumno);
    });
}
