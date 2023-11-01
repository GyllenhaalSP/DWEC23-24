container = document.getElementById("container");
cursorCoordinates = document.getElementById("cursorCoordinates");

container.addEventListener("mousemove", function(event) {
    const x = event.clientX - container.getBoundingClientRect().left;
    const y = event.clientY - container.getBoundingClientRect().top;
    // Actualiza el texto con las coordenadas X e Y
    cursorCoordinates.textContent = `X: ${x}, Y: ${y}`;
    // Cambia el color de fondo basado en la posición del cursor
    const red = Math.floor((x / container.clientWidth) * 255); // clientWitdth devuelve el ancho interno del elemento
    const green = Math.floor((y / container.clientHeight) * 255);
    container.style.backgroundColor = `rgb(${red}, ${green}, 200)`;
});