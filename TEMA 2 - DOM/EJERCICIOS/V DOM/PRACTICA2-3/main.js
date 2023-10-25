window.onload = () => {
    const losDatos = recuperarDatos();
    losDatos.forEach(dato => {
        agregarTarea(dato);
    });
}

document.getElementById("input").addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
        agregarTarea();
    }
});

const recuperarDatos = () => {
    let datos;
    if(localStorage.getItem("datos") == null){
        datos = [];
    }else{
        datos = JSON.parse(localStorage.getItem("datos"));
    }
    return datos;
}

const guardarDatos = () => {
    let ul = document.getElementById("lista");
    let tareas = ul.getElementsByTagName("li");
    let datos = [];

    for (let tarea of tareas){
        datos.push(tarea.getElementsByClassName("tarea")[0].innerHTML);
    }
    localStorage.setItem("datos", JSON.stringify(datos));
    console.log("=>(main.js:34) ", "Datos guardados");
}

function agregarTarea(tarea){
    let input = document.getElementById("input");
    if (input.value === "" && !tarea) return;
    let ul = document.getElementById("lista");
    let li = document.createElement("li");
    let tareaValor = tarea || input.value;

    li.onclick = () => seleccionarTarea(li.children[0]);
    li.innerHTML = "<span class='tarea'>" + tareaValor + "</span>" +
        "<button class='mover'>⬆️</button>" +
        "<button class='eliminar' onclick='eliminarTarea(this.parentElement)'>X</button>";

    ul.appendChild(li);

    li.getElementsByClassName('mover')[0].addEventListener('click', function(event) {
        event.stopPropagation();
        moverTarea(li, event);
    });

    guardarDatos();
    if(input) input.value = "";
}

function eliminarTarea(parent){
    if(parent){
        parent.remove();
        guardarDatos();
        return;
    }
    let tareas = document.getElementsByClassName("tarea");
    for (let i = tareas.length - 1; i >= 0; i--) {
        if(tareas[i].classList.contains("marcado")){
            tareas[i].parentElement.remove();
        }
    }
    guardarDatos();
}

function moverTarea(parent, event){
    event.stopPropagation();
    let ul = document.getElementById("lista");

    function mover(tarea) {
        if(tarea.previousElementSibling == null) {
            desmarcarTarea(tarea.children[0]);
            return;
        }

        tarea.classList.add("moving");
        setTimeout(() => {
            tarea.classList.remove("moving");
            ul.insertBefore(tarea, tarea.previousElementSibling);
            guardarDatos();
        }, 700);
    }

    if(parent){
        mover(parent);
        return;
    }

    let tareas = ul.getElementsByTagName("li");
    for (let i = 0; i < tareas.length; i++) {
        if(tareas[i].children[0].classList.contains("marcado")){
            mover(tareas[i]);
        }
    }
}

function seleccionarTarea(tarea){
    tarea.classList.toggle("marcado");
    tarea.parentElement.classList.toggle("seleccionado");
}

function desmarcarTarea(tarea){
    tarea.classList.toggle("marcado");
    tarea.parentElement.classList.toggle("seleccionado");
}