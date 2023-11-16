window.addEventListener("DOMContentLoaded", function() {
    let parametros = new URLSearchParams(window.location.search);
    document.getElementById("campo-nombre").textContent = parametros.get("nombre");
    document.getElementById("campo-apellido").textContent = parametros.get("apellido");
    document.getElementById("titulo").textContent = parametros.get("ciclo");
    document.getElementById("year").textContent = parametros.get("curso");
});