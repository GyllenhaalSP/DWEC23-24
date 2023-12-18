function cambiar(){
    var elementos = document.querySelectorAll(".elemento li");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.color = randomColor();
    }
}

function randomColor(){
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#"+ randomColor;
}