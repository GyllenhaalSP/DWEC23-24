let container = document.getElementById("container");
let boton = document.getElementById("remove");
let p = document.getElementById("numAleatorio");

function generarAleatorio() {
    let numAleatorio = Math.floor(Math.random() * 10) + 1;
    p.innerHTML = numAleatorio.toString();
}

container.addEventListener("mousemove", generarAleatorio);

container.addEventListener("click", function(event) {
    if (event.target.id === "remove"){
        container.removeEventListener("mousemove", generarAleatorio);
    }
});