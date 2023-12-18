function enviarDatos(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellido").value;
    let ciclo = document.getElementById("ciclo").value;
    let curso = document.getElementById("curso").value;
    window.location.href = "tarjeta.html?nombre=" + encodeURIComponent(nombre) +
        "&apellido=" + encodeURIComponent(apellidos) +
        "&ciclo=" + encodeURIComponent(ciclo) +
        "&curso=" + encodeURIComponent(curso);
}