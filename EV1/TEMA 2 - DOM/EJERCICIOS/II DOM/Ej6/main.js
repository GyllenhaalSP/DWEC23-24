function evoluciona(){
    var imagen = document.getElementById("evolucion");
    if (imagen.src === "https://dalonsolaz.asyncore.es/DWEC23-24/TEMA%202%20-%20DOM/EJERCICIOS/II%20DOM/Ej6/resources/bulbasaur.jpg"){
        imagen.src = "resources/ivysaur.jpg";
        imagen.alt = "Ivysaur";
    }else if (imagen.src === "https://dalonsolaz.asyncore.es/DWEC23-24/TEMA%202%20-%20DOM/EJERCICIOS/II%20DOM/Ej6/resources/ivysaur.jpg"){
        imagen.src = "resources/venusaur.jpg";
        imagen.alt = "Venusaur";
    }else{
        alert("No hay más evoluciones");
    }
}