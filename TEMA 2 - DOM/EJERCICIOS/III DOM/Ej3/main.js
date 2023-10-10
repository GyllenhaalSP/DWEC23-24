function resaltar(){
    var parrafo = document.getElementById("parrafo");
    parrafo.classList.toggle("resaltado");
}

function notificar(){
    var parrafo = document.getElementById("parrafo");
    var verificar = document.getElementById("verificar");
    if(parrafo.classList.value === "resaltado") {
     verificar.textContent = "El párrafo está resaltado";
    } else {
        verificar.textContent = "El párrafo no está resaltado";
    }
}