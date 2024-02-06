let tareas: string[] = [];

window.addEventListener('DOMContentLoaded', () => {
    const formulario: HTMLElement = document.getElementById('formularioTarea')!;
    const listaTareas: HTMLElement = document.getElementById('listaTareas')!;

    formulario.addEventListener('submit', (e) : void => {
        e.preventDefault();
        const input: HTMLInputElement = document.getElementById('nuevaTarea') as HTMLInputElement;
        const tarea: string = input.value.trim();

        if (tarea) {
            tareas.push(tarea);
            actualizarListaTareas();
            input.value = '';
        }
    });

    function actualizarListaTareas() {
        listaTareas.innerHTML = '';
        tareas.forEach((tarea) => {
            const elementoLista = document.createElement('li');
            elementoLista.textContent = tarea;
            listaTareas.appendChild(elementoLista);
        });
    }
});
