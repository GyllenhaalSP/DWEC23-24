function eliminarParrafo(){
    let container = document.getElementById("container");
    let parrafo = document.querySelectorAll("p");
    parrafo.forEach((element, index) => {
        if(element.classList.contains("item") && (index > 5 && index < 9)){
            container.removeChild(element);
        }
    });
}