const padre = document.getElementById("contenedor");
const hijos = padre.children;

function resaltarSiguiente(){
    for (let i = 0; i < hijos.length; i++) {
        if(hijos[i].nextElementSibling.nodeName === 'SPAN'){
            hijos[i+1].style.backgroundColor = "red";
            break;
        }
    }
}

function resaltarAnterior(){
    for (let i = 1; i < hijos.length; i++) {
        if(hijos[i].previousElementSibling.nodeName === 'SPAN'){
            hijos[i-1].style.backgroundColor = "red";
            break;
        }
    }
}