function cambiar(){
    var ul = document.getElementsByClassName("ul");

    for (let i = 0; i < ul.length; i++) {
        ul[i].style.color = "red";
        ul[i].style.backgroundColor = randomColor();
    }
}

function randomColor(){
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#"+ randomColor;
}