function select(){
    var item = document.querySelectorAll(".item");
    console.log(item);
    var destacado = document.querySelectorAll(".destacado:nth-of-type(-n+3)");
    console.log(destacado);
    var oculto = document.querySelectorAll(".oculto:nth-last-of-type(-n+2)");
    console.log(oculto);
}