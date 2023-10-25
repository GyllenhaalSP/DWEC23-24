//Llamamos a todas las imágenes del archivo html
let images = document.getElementsByTagName("img");

//Recorremos todas las imágenes y les añadimos los eventos para que cambie el borde al pasar el ratón por encima
for (let i = 0; i < images.length; i++){
    images[i].onmouseover = function(){
        this.style.borderColor = "#66bb6a";
        if(this.id === "main"){
            this.nextElementSibling.style.color = "#66bb6a";
        }
    };
    images[i].onmouseout = function(){
        this.style.borderColor = "#004d40";
        if(this.id === "main"){
            this.nextElementSibling.style.color = "#004d40";
        }
    }
}

// Función que cambia la imagen principal y el texto de la descripción
function changeImage(imagen){
    let img = document.getElementById("main");
    let desc = document.getElementById("pokemon");
    img.src = imagen.src;
    desc.innerHTML = imagen.alt.toUpperCase();
}