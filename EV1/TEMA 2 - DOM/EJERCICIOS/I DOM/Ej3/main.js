function cambiar(){
    var elementos = document.getElementsByClassName("li");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.color = "lightgreen";
    }
}