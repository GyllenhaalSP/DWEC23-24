let frases = [
    "A quien madruga dios le ayuda",
    "A buen entendedor pocas palabras bastan",
    "En casa del herrero cuchillo de palo",
    "El perro de san Roque no tiene rabo",
    "En boca cerrada no entran moscas"
]

let pistas = document.getElementById("pistas");

document.addEventListener("DOMContentLoaded", function() {
        let numRandom = Math.floor(Math.random() * 5);
        let fraseEscogida = frases[numRandom].toUpperCase();
        //Aquí tengo los divs con la letra para clickar
        let letras = document.getElementsByClassName("letra");
        let cheats = document.getElementById("cheats");

        cheats.textContent = fraseEscogida;

        for (let letra of fraseEscogida) {
            let caja = document.createElement("button");
            caja.textContent = letra;
            caja.classList.add("pista");
            if (caja.textContent === " ") {
                caja.style.backgroundColor = "red";
            }
            pistas.appendChild(caja);
        }

        frases.splice(numRandom, 1);

        for (let letraParaPulsar of letras) {
            letraParaPulsar.addEventListener("click", function (e) {
                for (let letra of fraseEscogida) {
                    let letraInside = letra.getAttribute("letra");
                    console.log("letraInside");
                    if (e.target.textContent === letraInside) {
                        console.log("holi");
                    }
                }
            });
        }
    }
);