let boton = document.getElementsByClassName("boton");
let container = document.getElementById("container");

container.addEventListener("click", function (containerEvent) {
    alert(containerEvent.target.id);
    if(containerEvent.target.className === "boton"){
        alert("Has pulsado el botón " + containerEvent.target.id + " y el evento ha sido " + containerEvent.type);
    }
});