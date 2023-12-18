function conValue(){
    var input = document.getElementById("texto");
    input.value = "Nuevo valor del campo";
}

function conInnerHTML(){
    var parrafo = document.getElementById("parrafo");
    parrafo.innerHTML = "El <b>contenido</b> ha sido cambiado con innerHTML";
}

function conTextContent(){
    var parrafo = document.getElementById("parrafo");
    parrafo.textContent = "El contenido ha sido cambiado con textContent";
}