function cambiar(){
    if(document.getElementById("parrafo").style.color === "red"){
        document.getElementById("titulo").innerHTML = "Hola Universo!";
        document.getElementById("parrafo").style.color = "blue";
    }else{
        document.getElementById("titulo").innerHTML = "Hola Mundo!";
        document.getElementById("parrafo").style.color = "red";
    }
}