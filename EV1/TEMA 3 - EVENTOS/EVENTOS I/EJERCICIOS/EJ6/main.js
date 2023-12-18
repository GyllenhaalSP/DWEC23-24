let container = document.getElementById("container");

container.addEventListener("click", function(event) {
    if (event.target.id === "divBlanco") {
        let pBlanco = document.getElementById("pBlanco");
        pBlanco.innerHTML = "Has tocado el div blanco";
    } else if (event.target.id === "divAzul") {
        let pAzul = document.getElementById("pAzul");
        pAzul.innerHTML = "Has tocado el div azul";
    } else if (event.target.id === "boton") {
        let pBoton = document.getElementById("pBoton");
        pBoton.innerHTML = "Has tocado el botón";
    }
});
