function mostrarDestacados() {
    const elementosDestacados = document.querySelectorAll('.destacado:nth-child(-n+3)');
    elementosDestacados.forEach(elemento => {
        console.log(elemento);
        elemento.style.display = 'block';
    });
}

function ocultarDestacados() {
    const elementosDestacados = document.querySelectorAll('.destacado:nth-child(-n+3)');
    elementosDestacados.forEach(elemento => {
        console.log(elemento);
        elemento.style.display = 'none';
    });
}

function mostrarOcultos() {
    const elementosOcultos = document.querySelectorAll('.oculto:nth-last-child(n+2)');
    elementosOcultos.forEach(elemento =>{
        console.log(elemento);
        elemento.style.display = 'block';
    });
}

function ocultarOcultos() {
    const elementosOcultos = document.querySelectorAll('.oculto:nth-last-child(n+2)');
    elementosOcultos.forEach(elemento => {
        console.log(elemento);
        elemento.style.display = 'none';
    });
}