//container 1 - Eventos de ratón - click
let onclick = document.getElementById("onclick");
onclick.addEventListener("click", function() {
    alert("Has hecho click, ¿qué esperabas?");
});

//containers 2 y 3 - Eventos de ratón - mouseover y mouseout
let mouseover = document.getElementById("mouseover");
let mouseout = document.getElementById("mouseout");

mouseover.addEventListener("mouseover", function() {
    mouseover.style.color = "red";
    mouseover.innerHTML = "¡AHORA SOY ROJO! :C";
});

mouseout.addEventListener("mouseout", function() {
    mouseout.style.color = "blue";
});

mouseout.addEventListener("mouseover", function() {
    mouseout.style.color = "black";
});

//container 4 - Eventos de ratón - mousedown y mouseup
let boton = document.getElementById("boton");
boton.addEventListener("mousedown", function() {
    boton.innerHTML = "¡Suéltame!";
});

boton.addEventListener("mouseup", function() {
    boton.innerHTML = "¡Púlsame!";
});

//container 5 - Eventos de teclado - keydown y keyup
let h2teclado = document.getElementById("h2teclado");

document.addEventListener("keydown", function(event) {
    h2teclado.innerHTML = "Has pulsado la tecla " + event.key;
});

let h2teclado2 = document.getElementById("h2teclado2");

let teclaRandom = generarTeclaAleatoria();

document.addEventListener("keyup", function(event) {
    console.log("=>(formulario.js:42) teclaRandom", teclaRandom);
    console.log("=>(formulario.js:43) event.key", event.key);
    if(event.key === teclaRandom) {
        h2teclado2.innerHTML = "Acertaste, la tecla era " + teclaRandom + " y has pulsado " + event.key;
        teclaRandom = generarTeclaAleatoria();
        h2teclado2.style.color = "green";
    }else{
        h2teclado2.innerHTML = "Fallaste<br>La tecla era '"+'?'.repeat(event.key.length) +"' y has pulsado " + event.key;
        h2teclado2.style.color = "red";
    }
});

//container 6 - Eventos de formulario - input, change y submit
document.getElementById('nombre').addEventListener('input', function(event) {
    let valor = event.target.value;
    let labelnombre = document.getElementById('labelnombre');
    labelnombre.innerHTML = "Nombre: " + valor;
});

document.getElementById('email').addEventListener('change', function(event) {
    let valor = event.target.value;
    let labelemail = document.getElementById('labelemail');
    if (!valor.includes('@')) {
        labelemail.innerHTML = "El correo electrónico debe llevar un @!!!";
        labelemail.style.color = "red";
    } else {
        labelemail.innerHTML = "Al menos tiene @...";
        labelemail.style.color = "green";
    }
});

document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado.');
});

//container 7 - Eventos de ventana - load y DOMContentLoaded

let parrafo = document.getElementById("parrafo");
window.addEventListener("load", () => {
    parrafo.innerHTML = "Este párrafo se ha cargado con el evento load.";
});

let parrafo2 = document.getElementById("parrafo2");
document.addEventListener("DOMContentLoaded", () => {
    parrafo2.innerHTML = "Este párrafo se ha cargado con el evento DOMContentLoaded.";
});

//container 8 - Eventos de temporización - setTimeout y setInterval
let boton1 = document.getElementById("boton1");
let parrafo3 = document.getElementById("parrafo3");

boton1.addEventListener("click", () => {
    let decimas = 0;

    let intervalo = setInterval(() => {
        decimas += 1;
        parrafo3.innerHTML = (decimas / 10) + " segundos";
    }, 100);

    setTimeout(() => {
        clearInterval(intervalo);
        parrafo3.innerHTML = "Han pasado 3 segundos";
    }, 3000);
});

//container 9 - Eventos de Interacción de Usuario - focus, blur, contextmenu, drag y drop

let input = document.getElementById("input");
input.addEventListener("focus", () => {
    input.style.backgroundColor = "yellow";
    input.classList.remove("placeholder");
    input.classList.add("placeholder2");
});

input.addEventListener("blur", () => {
    input.style.backgroundColor = "blue";
    input.classList.remove("placeholder2");
    input.classList.add("placeholder");
});

let boton2 = document.getElementById("boton2");
let parrafo4 = document.getElementById("parrafo4");
boton2.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    parrafo4.innerHTML = "JAJAJA no click derecho 4 you";
});

let draggable = document.getElementById("draggable");
let droppable = document.getElementById("droppable");

draggable.addEventListener("dragstart", (event) => {
    draggable.style.backgroundColor = "red";
    draggable.innerHTML = "<p>¡Me están arrastrando!</p>";
    draggable.style.lineHeight = "60px";
    event.dataTransfer.setData( "text/plain", event.target.id);
});

droppable.addEventListener("dragover", (event) => {
    event.preventDefault();
});

droppable.addEventListener("drop", (event) => {
    event.preventDefault();
    let data = event.dataTransfer.getData("text/plain");
    let elemento = document.getElementById(data);
    let parrafo5 = droppable.querySelector("p");
    elemento.style.backgroundColor = "green";
    elemento.innerHTML = "<p>¡Ozu premo...!</p>";
    elemento.position = "relative";
    elemento.style.marginLeft = "70px";
    parrafo5.innerText = "¡AY lo que m'han soltao encima!";
    parrafo5.style.lineHeight = "30px";
    droppable.style.backgroundColor = "darkblue";
    droppable.style.color = "#ccc";
    parrafo5.appendChild(elemento);
});

// Eventos de navegación - beforeunload
window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = "No te vayas :'C";
});

// función para los eventos de teclado
function generarTeclaAleatoria() {
    const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const teclasEspeciales = ["Enter", "Tab", "Shift", "Ctrl", "Alt", "Esc", "Space", "Delete", "Backspace"];

    const todasLasTeclas = letras + numeros + teclasEspeciales.join("");

    const tipoTecla = Math.floor(Math.random() * 6);

    let teclaAleatoria;

    switch (tipoTecla) {
        case 0:
            teclaAleatoria = letras.charAt(Math.floor(Math.random() * letras.length));
            break;
        case 1:
            teclaAleatoria = numeros.charAt(Math.floor(Math.random() * numeros.length));
            break;
        case 2:
            teclaAleatoria = teclasEspeciales[Math.floor(Math.random() * teclasEspeciales.length)];
            break;
        default:
            teclaAleatoria = todasLasTeclas[Math.floor(Math.random() * todasLasTeclas.length)]
    }
    return teclaAleatoria;
}
