function cambiaId(){
    var miDiv = document.getElementById("miDiv");
    var miDiv2 = document.getElementById("miDiv2");
    if(miDiv && miDiv.getAttribute("id") === "miDiv"){
        miDiv.setAttribute("id", "miDiv2");
    }
    if(miDiv2 && miDiv2.getAttribute("id") === "miDiv2"){
        miDiv2.setAttribute("id", "miDiv");
    }
}