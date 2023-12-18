function cambiarConTextContent(){
    var parrafo = document.getElementById("parrafo");
    parrafo.textContent = "¡El contenido ha sido cambiado con <b>textContent</b>!";
}

function cambiarConInnerHTML(){
    var parrafo = document.getElementById("parrafo");
    parrafo.innerHTML = "¡El contenido ha sido cambiado con <b>innerHTML</b>!";
}