let lista = document.getElementById("lista");
let parrafo = document.getElementById("parrafo");

function specialClick(e){
    parrafo.innerText = "Hiciste click en: " + e.target.innerText;
    e.stopPropagation();
}

let especial = lista.children[2];
especial.addEventListener("click", specialClick);

lista.addEventListener("click", (e) => {
    parrafo.innerText = 'Hiciste click en: ' + e.target.innerText;
    alert("Hiciste click en la lista");
});