function select(){
    let item = document.querySelectorAll(".item");
    console.log(item);
    let destacado = document.querySelectorAll(".destacado:nth-child(-n+7)");
    console.log(destacado);
    let oculto = document.querySelectorAll(".oculto:nth-last-child(-n+9)");
    console.log(oculto);
}