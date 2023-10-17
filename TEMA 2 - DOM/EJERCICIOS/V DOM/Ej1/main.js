function modificarContenedor(){
    let div = document.getElementById("contenedor");
    let hijosHTML = div.children;

    console.log("Hijos con children");
    [...hijosHTML].forEach((elemento, index) => {
        if(index === 0){

            elemento.innerText = "Primer hijo con children";
        }
        console.log(elemento);
    });

    let hijosNodos = div.childNodes;

    console.log("Hijos con childNodes");
    [...hijosNodos].forEach((elemento, index) => {
        if(index === 3){
            elemento.innerText = "Segundo hijo con childNodes";
        }
        console.log(elemento);
    });
}