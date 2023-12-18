function resaltarPrimerYUltimoParrafo(){
    let padre = document.getElementById("contenedor");

    let primerHijo = padre.firstElementChild
    let ultimoHijo = padre.lastElementChild

    primerHijo.style.backgroundColor = "yellow";
    ultimoHijo.style.backgroundColor = "yellow";
}