function resaltarElemento(numSeccion){
    let seccion = document.getElementById(numSeccion).getElementsByTagName("li");
    for (let i = 0; i < seccion.length; i++) {
        if(!seccion[i].classList.contains("resaltar")){
            seccion[i].classList.add("resaltar");
        }else{
            seccion[i].classList.remove("resaltar");
        }
    }
}

function ocultarElemento(lista){
    var elemento = document.getElementById(lista);
    elemento.classList.remove("mostrar");
    elemento.classList.add("ocultar");
}

function mostrarElemento(){
    var elemento = document.getElementsByClassName("ocultar");
    for(let i = 0; i < elemento.length; i++){
        elemento[i].classList.remove("ocultar");
        elemento[i].classList.add("mostrar");
    }
}