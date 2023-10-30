let boton = document.getElementsByClassName("boton");
let mensaje = document.getElementById("mensaje");

for (let i = 0; i < boton.length; i++) {
    boton[i].addEventListener("click", function () {
        mensaje.innerHTML = "";
        mensaje.innerHTML += "Has pulsado el botón " + (i + 1) + "<br>";
    });
}

boton[0].addEventListener("click", function (event) {
    mensaje.innerHTML = "";
    mensaje.innerHTML += "Elemento de destino del evento: " + event.target.outerHTML;
});

boton[1].addEventListener("click", function (event) {
    mensaje.innerHTML = "";
    mensaje.innerHTML += "Elemento de destino del evento: " + event.target.outerHTML;
});

boton[2].addEventListener("click", function (event) {
    mensaje.innerHTML = "";
    mensaje.innerHTML += "Elemento de destino del evento: " + event.target.outerHTML;
});