/*
Programa una web que muestre por consola/alert/escribiendo en pantalla el
código de la tecla y la tecla presionada.*/

let spanCodigo = document.getElementById("codigo");
let spanTecla = document.getElementById("tecla");

document.addEventListener("keydown", (e) => {
    console.log(`Tecla: ${e.key} Código: ${e.code}`);
    spanCodigo.innerHTML = e.code;
    spanTecla.innerHTML = e.key;
});