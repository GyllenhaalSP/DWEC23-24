function select(){
    var item = document.querySelectorAll(".item");
    item.forEach(element => {
        console.log(element.innerText);
    });
    var destacado = document.querySelectorAll(".padre .destacado:nth-child(-n+3)");
    destacado.forEach(element => {
        console.log(element.innerText);
    });
    var oculto = document.querySelectorAll(".padre .oculto:nth-last-child(-n+2)");
    oculto.forEach(element => {
        console.log(element.innerText);
    });
}