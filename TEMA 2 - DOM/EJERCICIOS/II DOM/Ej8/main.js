function cambiaEstado(){
    var checkbox = document.getElementById("checkbox");
    var parrafo = document.getElementById("parrafo");

    if(checkbox.checked){
        checkbox.checked = false;
        parrafo.textContent = "El checkbox está desmarcado";
    }else{
        checkbox.checked = true;
        parrafo.textContent = "El checkbox está marcado";
    }
}