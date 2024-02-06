var tareas = [];
window.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('formularioTarea');
    var listaTareas = document.getElementById('listaTareas');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = document.getElementById('nuevaTarea');
        var tarea = input.value.trim();
        if (tarea) {
            tareas.push(tarea);
            actualizarListaTareas();
            input.value = '';
        }
    });
    function actualizarListaTareas() {
        listaTareas.innerHTML = '';
        tareas.forEach(function (tarea) {
            var elementoLista = document.createElement('li');
            elementoLista.textContent = tarea;
            listaTareas.appendChild(elementoLista);
        });
    }
});
